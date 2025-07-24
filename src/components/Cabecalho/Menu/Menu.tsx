import { Link } from "react-router-dom";
import estilosMenu from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilosMenu.nav}>
      <Link className={estilosMenu.link} to="/">
        Home
      </Link>
      <Link className={estilosMenu.link} to="/sobre">
        Sobre
      </Link>
      <Link className={estilosMenu.link} to="/contato">
        Contato
      </Link>
    </nav>
  );
}
