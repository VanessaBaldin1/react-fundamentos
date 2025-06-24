import estilosMenu from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilosMenu.nav}>
      <a className={estilosMenu.link} href="">
        Home
      </a>
      <a className={estilosMenu.link} href="">
        Sobre
      </a>
      <a className={estilosMenu.link} href="">
        Contato
      </a>
    </nav>
  );
}
