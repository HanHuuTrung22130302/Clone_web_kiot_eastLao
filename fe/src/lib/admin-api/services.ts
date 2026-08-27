import {
  fakeFetch,
  paginate,
  matchKeyword,
  sortRows,
  type ApiListParams,
  type ApiListResult,
} from "./http";
import { products, productGroups, type Product } from "@/data/admin/products";
import { customers, customerGroups, type Customer } from "@/data/admin/customers";
import { suppliers, supplierGroups, type Supplier } from "@/data/admin/suppliers";
import {
  orders,
  branches,
  warehouses,
  creators,
  channels,
  deliveryPartners,
  orderStatuses,
  type Order,
} from "@/data/admin/orders";
import { invoices, invoiceStatuses, type Invoice } from "@/data/admin/invoices";
import { returns, returnStatuses, type Return } from "@/data/admin/returns";
import {
  orderDeliveries,
  deliveryStatuses,
  partnerDeliveries,
  type OrderDelivery,
  type PartnerDelivery,
} from "@/data/admin/deliveries";
import {
  stockTakes,
  internalUses,
  damageItems,
  type StockTake,
  type InternalUse,
  type DamageItem,
} from "@/data/admin/warehouse";
import {
  employees,
  paysheetRows,
  commissionRows,
  timeSheetRows,
  type Employee,
  type PaysheetRow,
  type CommissionRow,
  type TimeSheetRow,
} from "@/data/admin/employees";
import { cashFlows, cashFlowCategories, type CashFlow } from "@/data/admin/cash-flow";
import { priceBooks, warrantyItems, orderWarranties, type PriceBook, type WarrantyItem, type OrderWarranty } from "@/data/admin/warranty";
import {
  purchaseOrders,
  purchaseOrderStatuses,
  purchaseReturns,
  purchaseEInvoices,
  servicePurchases,
  type PurchaseOrder,
  type PurchaseReturn,
  type PurchaseEInvoice,
  type ServicePurchase,
} from "@/data/admin/purchasing";
import {
  dashboardStats,
  revenueByDay,
  topProducts,
  topCustomers,
  saleReportRows,
  orderReportRows,
  userReportRows,
  channelReportRows,
  supplierReportRows,
  customerReportRows,
  endOfDayRows,
  financialReportRows,
  type SaleRow,
  type OrderReportRow,
  type UserReportRow,
  type EndOfDayRow,
} from "@/data/admin/reports";

const DELAY = 180;

function list<T>(all: T[], params: ApiListParams, searchKeys: (keyof T)[]): Promise<ApiListResult<T>> {
  const kw = (params.keyword || "").trim();
  const filtered = all.filter((row) => matchKeyword(row, kw, searchKeys));
  const sorted = sortRows(filtered, params.sort);
  const result = paginate(sorted, params);
  return fakeFetch(result, DELAY);
}

export const adminApi = {
  products: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Product>> =>
      list(products, params, ["code", "name", "barcode", "group", "brand"]),
    groups: (): Promise<string[]> => fakeFetch(productGroups, DELAY),
    getByCode: (code: string): Promise<Product | undefined> =>
      fakeFetch(products.find((p) => p.code === code), DELAY),
  },
  customers: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Customer>> =>
      list(customers, params, ["code", "name", "phone", "group", "email"]),
    groups: (): Promise<string[]> => fakeFetch(customerGroups, DELAY),
    getByPhone: (phone: string): Promise<Customer | undefined> =>
      fakeFetch(customers.find((c) => c.phone === phone || c.phone.replace(/\s/g, "").includes(phone)), DELAY),
  },
  suppliers: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Supplier>> =>
      list(suppliers, params, ["code", "name", "phone", "group", "company"]),
    groups: (): Promise<string[]> => fakeFetch(supplierGroups, DELAY),
  },
  orders: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Order>> =>
      list(orders, params, ["code", "invoiceCode", "deliveryCode", "customer", "phone", "creator"]),
    getByCode: (code: string): Promise<Order | undefined> =>
      fakeFetch(orders.find((o) => o.code === code), DELAY),
    statuses: (): Promise<string[]> => fakeFetch(orderStatuses, DELAY),
    branches: (): Promise<string[]> => fakeFetch(branches, DELAY),
    warehouses: (): Promise<string[]> => fakeFetch(warehouses, DELAY),
    creators: (): Promise<string[]> => fakeFetch(creators, DELAY),
    channels: (): Promise<string[]> => fakeFetch(channels, DELAY),
    deliveryPartners: (): Promise<string[]> => fakeFetch(deliveryPartners, DELAY),
  },
  invoices: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Invoice>> =>
      list(invoices, params, ["code", "customer", "phone", "creator"]),
    statuses: (): Promise<string[]> => fakeFetch([...invoiceStatuses], DELAY),
    getByCode: (code: string): Promise<Invoice | undefined> =>
      fakeFetch(invoices.find((i) => i.code === code), DELAY),
  },
  returns: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Return>> =>
      list(returns, params, ["code", "invoiceCode", "customer", "phone", "creator"]),
    statuses: (): Promise<string[]> => fakeFetch([...returnStatuses], DELAY),
  },
  deliveries: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<OrderDelivery>> =>
      list(orderDeliveries, params, ["code", "invoiceCode", "customer", "receiver", "phone"]),
    statuses: (): Promise<string[]> => fakeFetch([...deliveryStatuses], DELAY),
    partners: (): Promise<PartnerDelivery[]> => fakeFetch(partnerDeliveries, DELAY),
  },
  warranties: {
    orderWarranties: (params: ApiListParams = {}): Promise<ApiListResult<OrderWarranty>> =>
      list(orderWarranties, params, ["code", "customer", "phone", "creator"]),
    items: (params: ApiListParams = {}): Promise<ApiListResult<WarrantyItem>> =>
      list(warrantyItems, params, ["code", "name", "customer", "serial", "phone"]),
    priceBooks: (params: ApiListParams = {}): Promise<ApiListResult<PriceBook>> =>
      list(priceBooks, params, ["name"]),
  },
  warehouse: {
    stockTakes: (params: ApiListParams = {}): Promise<ApiListResult<StockTake>> =>
      list(stockTakes, params, ["code", "creator", "note"]),
    internalUses: (params: ApiListParams = {}): Promise<ApiListResult<InternalUse>> =>
      list(internalUses, params, ["code", "type", "creator", "note"]),
    damageItems: (params: ApiListParams = {}): Promise<ApiListResult<DamageItem>> =>
      list(damageItems, params, ["code", "creator", "note"]),
  },
  employees: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<Employee>> =>
      list(employees, params, ["username", "name", "phone", "email", "role"]),
    paysheet: (params: ApiListParams = {}): Promise<ApiListResult<PaysheetRow>> =>
      list(paysheetRows, params, ["code", "name"]),
    commissions: (params: ApiListParams = {}): Promise<ApiListResult<CommissionRow>> =>
      list(commissionRows, params, ["code", "name"]),
    timesheets: (params: ApiListParams = {}): Promise<ApiListResult<TimeSheetRow>> =>
      list(timeSheetRows, params, ["code", "name"]),
  },
  cashflow: {
    list: (params: ApiListParams = {}): Promise<ApiListResult<CashFlow>> =>
      list(cashFlows, params, ["code", "category", "note", "creator"]),
    categories: (): Promise<string[]> => fakeFetch(cashFlowCategories, DELAY),
  },
  purchasing: {
    orders: (params: ApiListParams = {}): Promise<ApiListResult<PurchaseOrder>> =>
      list(purchaseOrders, params, ["code", "supplier", "note", "creator"]),
    orderStatuses: (): Promise<string[]> => fakeFetch([...purchaseOrderStatuses], DELAY),
    returns: (params: ApiListParams = {}): Promise<ApiListResult<PurchaseReturn>> =>
      list(purchaseReturns, params, ["code", "purchaseCode", "supplier", "creator"]),
    einvoices: (params: ApiListParams = {}): Promise<ApiListResult<PurchaseEInvoice>> =>
      list(purchaseEInvoices, params, ["code", "supplier"]),
    services: (params: ApiListParams = {}): Promise<ApiListResult<ServicePurchase>> =>
      list(servicePurchases, params, ["code", "supplier", "note", "creator"]),
  },
  reports: {
    dashboard: (): Promise<typeof dashboardStats> => fakeFetch(dashboardStats, DELAY),
    revenueByDay: (): Promise<number[]> => fakeFetch(revenueByDay, DELAY),
    topProducts: (): Promise<typeof topProducts> => fakeFetch(topProducts, DELAY),
    topCustomers: (): Promise<typeof topCustomers> => fakeFetch(topCustomers, DELAY),
    sale: (params: ApiListParams = {}): Promise<ApiListResult<SaleRow>> =>
      list(saleReportRows, params, ["code", "name", "category"]),
    orders: (params: ApiListParams = {}): Promise<ApiListResult<OrderReportRow>> =>
      list(orderReportRows, params, ["code", "status"]),
    users: (params: ApiListParams = {}): Promise<ApiListResult<UserReportRow>> =>
      list(userReportRows, params, ["username", "name"]),
    channels: (): Promise<typeof channelReportRows> => fakeFetch(channelReportRows, DELAY),
    suppliers: (): Promise<typeof supplierReportRows> => fakeFetch(supplierReportRows, DELAY),
    customers: (): Promise<typeof customerReportRows> => fakeFetch(customerReportRows, DELAY),
    endOfDay: (params: ApiListParams = {}): Promise<ApiListResult<EndOfDayRow>> =>
      list(endOfDayRows, params, ["code", "branch", "cashier"]),
    financial: (): Promise<typeof financialReportRows> => fakeFetch(financialReportRows, DELAY),
  },
};

export type { ApiListParams, ApiListResult };
export { fakeFetch };
