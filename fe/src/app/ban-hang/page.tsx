"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  Minus,
  Plus,
  Trash2,
  UserRound,
  Percent,
  ShoppingBasket,
  FileText,
  ShoppingBag,
  Undo2,
  QrCode,
  Banknote,
  Landmark,
  Check,
  ChevronLeft,
  Printer,
  History,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { products, productGroups } from "@/data/admin/products";
import { customers } from "@/data/admin/customers";
import { formatVND } from "@/lib/admin-api/format";
import { getFakeAuth } from "@/lib/auth";

interface CartLine {
  productId: string;
  code: string;
  name: string;
  price: number;
  qty: number;
  unit: string;
}

type SaleMode = "Chế độ nhập" | "Hóa đơn" | "Đặt hàng" | "Trả hàng";

const MODES: { key: SaleMode; icon: React.ReactNode; label: string }[] = [
  { key: "Chế độ nhập", icon: <ShoppingBasket className="h-4 w-4" />, label: "Chế độ nhập" },
  { key: "Hóa đơn", icon: <FileText className="h-4 w-4" />, label: "Hóa đơn" },
  { key: "Đặt hàng", icon: <ShoppingBag className="h-4 w-4" />, label: "Đặt hàng" },
  { key: "Trả hàng", icon: <Undo2 className="h-4 w-4" />, label: "Trả hàng" },
];

type PayMethod = "Tiền mặt" | "Chuyển khoản" | "Quét QR";

const PAY_METHODS: { key: PayMethod; icon: React.ReactNode }[] = [
  { key: "Tiền mặt", icon: <Banknote className="h-4 w-4" /> },
  { key: "Chuyển khoản", icon: <Landmark className="h-4 w-4" /> },
  { key: "Quét QR", icon: <QrCode className="h-4 w-4" /> },
];

export default function BanHangPage() {
  const auth = getFakeAuth();

  const [mode, setMode] = useState<SaleMode>("Hóa đơn");
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("Tất cả");
  const [lines, setLines] = useState<CartLine[]>([]);
  const [customerId, setCustomerId] = useState("");
  const [customerQuery, setCustomerQuery] = useState("");
  const [customerOpen, setCustomerOpen] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountType, setDiscountType] = useState<"amount" | "percent">("amount");
  const [payMethod, setPayMethod] = useState<PayMethod>("Tiền mặt");
  const [received, setReceived] = useState<number | "">("");
  const [showPayModal, setShowPayModal] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "done">("idle");
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okGroup = activeGroup === "Tất cả" || p.group === activeGroup;
      const okQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.barcode.includes(q);
      return okGroup && okQuery && p.status !== "Ngừng bán";
    });
  }, [query, activeGroup]);

  const customerSuggestions = useMemo(() => {
    const q = customerQuery.trim().toLowerCase();
    if (!q) return customers.slice(0, 8);
    return customers.filter(
      (c) => c.name.toLowerCase().includes(q) || c.phone.includes(q)
    );
  }, [customerQuery]);

  const selectedCustomer = customers.find((c) => c.id === customerId);

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const discount =
    discountType === "percent"
      ? Math.round((subtotal * Math.min(100, discountAmount)) / 100)
      : Math.min(discountAmount, subtotal);
  const total = Math.max(0, subtotal - discount);
  const change =
    received === "" ? null : Math.max(0, Number(received) - total);

  function addProduct(id: string) {
    const p = products.find((x) => x.id === id);
    if (!p || p.status === "Ngừng bán") return;
    setLines((prev) => {
      const found = prev.find((l) => l.productId === id);
      if (found) {
        return prev.map((l) =>
          l.productId === id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [
        ...prev,
        {
          productId: p.id,
          code: p.code,
          name: p.name,
          price: p.price,
          qty: 1,
          unit: p.unit,
        },
      ];
    });
  }

  function changeQty(productId: string, delta: number) {
    setLines((prev) =>
      prev
        .map((l) =>
          l.productId === productId
            ? { ...l, qty: Math.max(1, l.qty + delta) }
            : l
        )
        .filter((l) => l.qty > 0)
    );
  }

  function setQty(productId: string, qty: string) {
    const n = Math.max(1, Number(qty) || 0);
    setLines((prev) =>
      prev
        .map((l) => (l.productId === productId ? { ...l, qty: n } : l))
        .filter((l) => l.qty > 0)
    );
  }

  function removeLine(productId: string) {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }

  function handleSave() {
    if (lines.length === 0) return;
    setSaveState("saving");
    setTimeout(() => setSaveState("done"), 800);
    setTimeout(() => {
      setShowPayModal(false);
      setSaveState("idle");
      setLines([]);
      setCustomerId("");
      setDiscountAmount(0);
      setReceived("");
    }, 1500);
  }

  const itemsCount = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="flex h-screen flex-col bg-[#F7F8F9]">
      {/* Top bar */}
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-[#E4E6E9] bg-white px-3 sm:px-4">
        <Link
          href="/quan-ly"
          className="flex items-center gap-1 text-[13px] font-medium text-[#15171A] hover:text-[#0070F4]"
        >
          <ChevronLeft className="h-4 w-4" />
          Quản lý
        </Link>
        <div className="h-5 w-px bg-[#E4E6E9]" />
        <h1 className="text-[15px] font-semibold text-[#15171A]">Bán hàng</h1>
        <span className="text-[13px] text-[#72747C]">
          {auth?.shopName || "Chi nhánh trung tâm"}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full bg-[#00B63E]/10 px-2.5 py-1 text-[12px] font-medium text-[#00942F] md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00B63E]" />
            Đã kết nối máy in
          </span>
          <button className="flex items-center gap-1.5 rounded-lg border border-[#E4E6E9] px-3 py-1.5 text-[13px] font-medium text-[#15171A] hover:bg-[#F0F1F3]">
            <History className="h-4 w-4" />
            Lịch sử giao dịch
          </button>
        </div>
      </header>

      {/* Mode tabs */}
      <div className="flex shrink-0 items-center gap-1 border-b border-[#E4E6E9] bg-white px-3 sm:px-4">
        {MODES.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors",
              mode === m.key
                ? "text-[#0070F4]"
                : "text-[#72747C] hover:text-[#15171A]"
            )}
          >
            {m.icon}
            {m.label}
            {mode === m.key && (
              <span className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-[#0070F4]" />
            )}
          </button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left: product grid */}
        <section className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:p-4">
            <div className="flex h-10 items-center gap-2 rounded-lg border border-[#E4E6E9] bg-white px-3 focus-within:border-[#0070F4]">
              <Search className="h-4 w-4 text-[#72747C]" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm theo tên, mã hàng, mã vạch..."
                className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-[#B0B4BC]"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Tất cả", ...productGroups].slice(0, 7).map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
                    activeGroup === g
                      ? "border-[#0070F4] bg-[#0070F4]/10 text-[#0070F4]"
                      : "border-[#E4E6E9] bg-white text-[#72747C] hover:border-[#0070F4]/40"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3 sm:px-4 sm:pb-4">
            {filteredProducts.length === 0 ? (
              <div className="flex h-40 flex-col items-center justify-center gap-2 text-[13px] text-[#72747C]">
                <Search className="h-6 w-6 text-[#B0B4BC]" />
                Không tìm thấy hàng hóa
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {filteredProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => addProduct(p.id)}
                    className="group flex flex-col rounded-lg border border-[#E4E6E9] bg-white p-2.5 text-left transition-all hover:border-[#0070F4] hover:shadow-sm"
                  >
                    <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-[#F7F8F9]">
                      <span className="text-[13px] font-semibold text-[#0070F4]">
                        {p.code}
                      </span>
                    </div>
                    <p className="line-clamp-2 min-h-[32px] text-[12px] leading-4 text-[#15171A]">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-[#0070F4]">
                      {formatVND(p.price)}
                    </p>
                    <p className="text-[11px] text-[#72747C]">
                      Tồn: {p.stock} {p.unit}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Right: cart */}
        <aside className="flex w-[360px] shrink-0 flex-col border-l border-[#E4E6E9] bg-white md:w-[400px]">
          {/* Customer */}
          <div className="border-b border-[#E4E6E9] p-3">
            <div className="relative">
              <button
                onClick={() => setCustomerOpen((v) => !v)}
                className="flex h-10 w-full items-center gap-2 rounded-lg border border-[#E4E6E9] bg-white px-3 text-[13px] hover:border-[#0070F4]"
              >
                {selectedCustomer ? (
                  <>
                    <UserRound className="h-4 w-4 text-[#0070F4]" />
                    <span className="font-medium text-[#15171A]">
                      {selectedCustomer.name}
                    </span>
                    <span className="text-[#72747C]">{selectedCustomer.phone}</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4 text-[#72747C]" />
                    <span className="text-[#72747C]">
                      Khách lẻ — chọn / thêm khách hàng
                    </span>
                  </>
                )}
              </button>

              {customerOpen && (
                <div className="absolute inset-x-0 top-11 z-20 rounded-lg border border-[#E4E6E9] bg-white p-2 shadow-lg">
                  <div className="mb-2 flex h-9 items-center gap-2 rounded-md border border-[#E4E6E9] px-2.5">
                    <Search className="h-3.5 w-3.5 text-[#72747C]" />
                    <input
                      value={customerQuery}
                      onChange={(e) => setCustomerQuery(e.target.value)}
                      placeholder="Tìm tên hoặc SĐT..."
                      className="w-full bg-transparent text-[13px] outline-none"
                    />
                  </div>
                  <ul className="max-h-64 overflow-y-auto">
                    {customerSuggestions.map((c) => (
                      <li key={c.id}>
                        <button
                          onClick={() => {
                            setCustomerId(c.id);
                            setCustomerOpen(false);
                            setCustomerQuery("");
                          }}
                          className={cn(
                            "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-[13px] hover:bg-[#F0F1F3]",
                            c.id === customerId && "bg-[#0070F4]/10 text-[#0070F4]"
                          )}
                        >
                          <span className="flex flex-col">
                            <span className="font-medium text-[#15171A]">
                              {c.name}
                            </span>
                            <span className="text-[11px] text-[#72747C]">
                              {c.phone} · {c.group}
                            </span>
                          </span>
                          {c.id === customerId && <Check className="h-4 w-4" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/quan-ly/khach-hang"
                    className="mt-1 flex items-center justify-center gap-1 rounded-md border border-dashed border-[#E4E6E9] px-2 py-1.5 text-[12px] font-medium text-[#0070F4] hover:bg-[#F0F1F3]"
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                    Thêm khách hàng mới
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Cart lines */}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {lines.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                <ShoppingBasket className="h-8 w-8 text-[#B0B4BC]" />
                <p className="text-[13px] text-[#72747C]">
                  Giỏ hàng trống. Nhấn vào hàng hóa bên trái để thêm.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-[#F0F1F3]">
                {lines.map((l) => (
                  <li key={l.productId} className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium text-[#15171A]">
                          {l.name}
                        </p>
                        <p className="text-[11px] text-[#72747C]">
                          {formatVND(l.price)} / {l.unit}
                        </p>
                      </div>
                      <button
                        onClick={() => removeLine(l.productId)}
                        className="rounded-md p-1 text-[#B0B4BC] hover:bg-[#FDECEA] hover:text-[#E11D48]"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-lg border border-[#E4E6E9]">
                        <button
                          onClick={() => changeQty(l.productId, -1)}
                          className="p-1.5 text-[#72747C] hover:text-[#0070F4]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <input
                          value={l.qty}
                          onChange={(e) => setQty(l.productId, e.target.value)}
                          className="h-7 w-10 border-x border-[#E4E6E9] bg-transparent text-center text-[13px] font-medium outline-none"
                        />
                        <button
                          onClick={() => changeQty(l.productId, 1)}
                          className="p-1.5 text-[#72747C] hover:text-[#0070F4]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-[13px] font-semibold text-[#15171A]">
                        {formatVND(l.price * l.qty)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Summary */}
          <div className="shrink-0 border-t border-[#E4E6E9] p-3">
            <div className="mb-2 flex items-center justify-between rounded-lg border border-[#E4E6E9] px-3 py-2">
              <label className="flex items-center gap-2 text-[13px] text-[#72747C]">
                <Percent className="h-4 w-4" />
                Chiết khấu
              </label>
              <div className="flex items-center gap-1">
                <input
                  value={discountAmount === 0 ? "" : discountAmount}
                  onChange={(e) =>
                    setDiscountAmount(Math.max(0, Number(e.target.value) || 0))
                  }
                  placeholder="0"
                  className="h-7 w-16 rounded-md border border-[#E4E6E9] bg-[#F7F8F9] px-2 text-right text-[13px] outline-none"
                />
                <div className="flex overflow-hidden rounded-md border border-[#E4E6E9]">
                  <button
                    onClick={() => setDiscountType("amount")}
                    className={cn(
                      "px-2 py-1 text-[11px] font-medium",
                      discountType === "amount"
                        ? "bg-[#0070F4] text-white"
                        : "bg-white text-[#72747C]"
                    )}
                  >
                    đ
                  </button>
                  <button
                    onClick={() => setDiscountType("percent")}
                    className={cn(
                      "px-2 py-1 text-[11px] font-medium",
                      discountType === "percent"
                        ? "bg-[#0070F4] text-white"
                        : "bg-white text-[#72747C]"
                    )}
                  >
                    %
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between text-[13px]">
              <span className="text-[#72747C]">
                {itemsCount} mặt hàng · {lines.length} loại
              </span>
              <span className="font-medium text-[#15171A]">
                {formatVND(subtotal)}
              </span>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[14px] text-[#15171A]">Tổng tiền</span>
              <span className="text-[18px] font-bold text-[#15171A]">
                {formatVND(total)}
              </span>
            </div>

            {mode === "Hóa đơn" && (
              <div className="mb-2 grid grid-cols-3 gap-1.5">
                {PAY_METHODS.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setPayMethod(m.key)}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-lg border py-2 text-[11px] font-medium transition-colors",
                      payMethod === m.key
                        ? "border-[#0070F4] bg-[#0070F4]/5 text-[#0070F4]"
                        : "border-[#E4E6E9] text-[#72747C] hover:border-[#0070F4]/40"
                    )}
                  >
                    {m.icon}
                    {m.key}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => setShowPayModal(true)}
                disabled={lines.length === 0}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#0070F4] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#005FD4] disabled:cursor-not-allowed disabled:bg-[#B0B4BC]"
              >
                {mode === "Đặt hàng" ? (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    Tạo đặt hàng
                  </>
                ) : mode === "Trả hàng" ? (
                  <>
                    <Undo2 className="h-4 w-4" />
                    Tạo phiếu trả
                  </>
                ) : (
                  <>
                    <Banknote className="h-4 w-4" />
                    Thanh toán
                  </>
                )}
              </button>
              <button
                title="In tạm"
                className="flex items-center justify-center rounded-lg border border-[#E4E6E9] px-3 text-[#72747C] hover:bg-[#F0F1F3]"
              >
                <Printer className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Payment modal */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-[#15171A]">
                {mode === "Đặt hàng"
                  ? "Xác nhận đặt hàng"
                  : mode === "Trả hàng"
                    ? "Xác nhận trả hàng"
                    : "Xác nhận thanh toán"}
              </h2>
              <button
                onClick={() => setShowPayModal(false)}
                className="rounded-md p-1 text-[#72747C] hover:bg-[#F0F1F3]"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 space-y-2 rounded-lg bg-[#F7F8F9] p-3 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#72747C]">Khách hàng</span>
                <span className="font-medium text-[#15171A]">
                  {selectedCustomer?.name || "Khách lẻ"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#72747C]">Số mặt hàng</span>
                <span className="font-medium text-[#15171A]">{itemsCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#72747C]">Tổng tiền</span>
                <span className="text-[16px] font-bold text-[#0070F4]">
                  {formatVND(total)}
                </span>
              </div>
              {mode === "Hóa đơn" && (
                <>
                  <div className="flex justify-between">
                    <span className="text-[#72747C]">Phương thức</span>
                    <span className="font-medium text-[#15171A]">{payMethod}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#72747C]">Khách trả</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#72747C]">đ</span>
                      <input
                        autoFocus
                        value={received}
                        onChange={(e) =>
                          setReceived(
                            e.target.value === ""
                              ? ""
                              : Math.max(0, Number(e.target.value))
                          )
                        }
                        placeholder={String(total)}
                        className="h-8 w-28 rounded-md border border-[#E4E6E9] bg-white px-2 text-right text-[13px] font-medium outline-none focus:border-[#0070F4]"
                      />
                    </div>
                  </div>
                  {change !== null && (
                    <div className="flex justify-between">
                      <span className="text-[#72747C]">Tiền thừa</span>
                      <span className="font-semibold text-[#00942F]">
                        {formatVND(change)}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>

            <button
              onClick={handleSave}
              disabled={saveState !== "idle"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0070F4] px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-[#005FD4] disabled:bg-[#B0B4BC]"
            >
              {saveState === "saving" ? (
                "Đang lưu..."
              ) : saveState === "done" ? (
                <>
                  <Check className="h-4 w-4" />
                  Đã lưu hóa đơn
                </>
              ) : (
                "Lưu giao dịch"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
