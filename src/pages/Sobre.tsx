import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Meu app React";
  });

  return (
    <section>
      <h2>Sobre nossa empresa</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        debitis architecto harum perferendis illo vel a corporis distinctio quod
        optio repudiandae atque facilis veniam doloribus corrupti ut reiciendis,
        voluptate ipsa?
      </p>
    </section>
  );
}
