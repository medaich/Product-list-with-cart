function Main({ children }) {
  const className = {
    base: {
      menu: "m-auto min-h-dvh max-w-[440px] p-6 sm:grid md:max-w-full md:grid-cols-2 md:gap-6 md:p-12 lg:grid-cols-[2fr_1fr] xl:grid-cols-[2fr_1fr] xl:gap-10 md:px-[16%]",
    },
  };

  return <main className={className.base.menu}>{children}</main>;
}

export default Main;
