export default function Footer() {
  return (
      <footer className="flex flex-col absolut bottom-0 md:flex-row md:px-32 lg:px-40 xl:px-60 px-20 items-center justify-between min-h-[84px] w-full bg-primaryBack text-[14px] ">
        <div className="text-center text-[14px]">
          Copyright © 2023. Todos os direitos reservados.
        </div>
        <div className="text-center text-[14px] text-primary">
          <a href="#">Termos de Uso</a> ·{" "}
          <a href="#">Política de Privacidade</a>
        </div>
      </footer>

  );
}
