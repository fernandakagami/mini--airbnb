import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type QueryParamsProviderProps = {
  children: ReactNode;
};

type QueryParamsContextProps = {
  queryParams: Record<string, any>;
  setQueryParams: (newParams: Partial<Record<string, any>>) => void;
  clearAllQueryParams: () => void;
};

const QueryParamsContext = createContext<QueryParamsContextProps | null>(null);

export const QueryParamsProvider = ({ children }: QueryParamsProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo(() => {
    const params: Record<string, any> = {};
    searchParams?.forEach((value, key) => {
      params[key] = value.includes(",") ? value.split(",") : value;
    });
    return params;
  }, [searchParams]);

  const setQueryParams = useCallback(
    (newParams: Partial<Record<string, any>>) => {
      const updatedParams = new URLSearchParams(searchParams?.toString());

      Object.entries(newParams).forEach(([key, value]) => {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          updatedParams.delete(key);
        } else {
          updatedParams.set(key, Array.isArray(value) ? value.join(",") : String(value));
        }
      });

      const search = updatedParams.toString();
      const query = search ? `?${search}` : "";
      router.push(`/${query}`);
    },
    [router, searchParams]
  );

  const clearAllQueryParams = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  return (
    <QueryParamsContext.Provider value={{ queryParams, setQueryParams, clearAllQueryParams }}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQueryParams = () => {
  const context = useContext(QueryParamsContext);

  if (!context) {
    throw new Error("useQueryParams must be used within a QueryParamsProvider");
  }

  return context;
};