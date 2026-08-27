const KEY = "kv-fake-auth";

export interface FakeAuth {
  fullname: string;
  shopName: string;
  loginAt: string;
}

export function fakeLogin(
  data: Omit<FakeAuth, "loginAt">
): FakeAuth {
  const auth: FakeAuth = {
    ...data,
    loginAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(auth));
  }
  return auth;
}

export function getFakeAuth(): FakeAuth | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FakeAuth) : null;
  } catch {
    return null;
  }
}

export function fakeLogout(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(KEY);
  }
}
