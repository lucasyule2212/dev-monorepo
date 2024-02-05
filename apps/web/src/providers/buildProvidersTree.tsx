"use client";
export default function buildProvidersTree(componentsWithProps: any[]) {
  const initialComponent = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  );

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }: { children: React.ReactNode }) => {
        return (
          <Provider {...props}>
            <AccumulatedComponents>{children}</AccumulatedComponents>
          </Provider>
        );
      };
    },
    initialComponent,
  );
}
