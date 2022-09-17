import React, { useState } from "react";
import { Button, HeadText, Card } from "./components";
import application from "./images/application.png";
import geo from "./images/geo.png";
import close from "./images/close.png";
import price from "./images/price.png";
import steklo from "./images/steklo.jpg";
import map from "./images/map.png";
import cura from "./images/cura.png";
import korpus from "./images/korpus.jpg";
import kach from "./images/kach.png";
import display from "./images/display.jpg";
import kamera from "./images/kamera.jpg";
import akb from "./images/akb.jpg";
import gnezdo from "./images/gnezdo.jpg";
import styles from "./Layout.module.css";

const Layout = () => {
  const [formActive, setFormActive] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <div className={styles.block}>
          <Button
            text={"Узнать стоимость услуг"}
            image={price}
            onClickButton={() => {
              setFormActive(true);
            }}
          />
        </div>
        <div className={styles.block}>
          <Button
            text={"Оставить заявку"}
            image={application}
            id={"block"}
            onClickButton={() => {
              setFormActive(true);
            }}
          />
        </div>
        <div className={styles.block}>
          <a
            href="https://yandex.by/maps/org/techno_space/179582010220/"
            target="_blank"
            rel="noreferrer"
            className={styles.block}
          >
            <Button text={"Как нас найти?"} image={geo} />
          </a>
        </div>
      </div>
      {formActive ? (
        <div className={styles.formBlock}>
          <form
            className={styles.forms}
            id="telegramForm"
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                console.log("Отправлено");
                let response = await fetch("http://localhost:3001/telegram", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8",
                  },
                  body: JSON.stringify({
                    name: name,
                    phone: phone,
                    description: description,
                  }),
                });
                let result = await response.json();
                console.log(result);
                // alert(result.message);
                await setFormActive(false);
              } catch (err) {
                throw Error(err);
              }
            }}
          >
            <div className={styles.closeBlock}>
              <div className={styles.headerForm}> Оставьте заявку</div>
              <img
                src={close}
                alt=""
                className={styles.closeImage}
                onClick={() => {
                  setFormActive(false);
                }}
              />
            </div>
            <textarea
              name="description"
              placeholder="Укажите модель телефона и проблему"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Имя"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              className={styles.input}
              type="phone"
              placeholder="Номер телефона"
              name="phone"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <button type={"submit"} className={styles.subButton}>
              Отправить заявку
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
      <HeadText>Почему мы?</HeadText>
      <div className={styles.info}>
        <div className={styles.line}>
          <Card
            image={map}
            textImage={"Местоположение"}
            description={
              "Мы находимся в 4 минутах ходьбы от станции метро молодёжная. До нас легко добраться."
            }
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={""}
          />
          <Card
            textImage={"От двери до двери"}
            description={
              'Бесплатный курьер заберет ваше устройство и вернет куда вам удобно уже "новенькое". '
            }
            image={cura}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={""}
          />
          <Card
            textImage={"Качество выше цены!"}
            image={kach}
            description={
              "Мы гарантируем вам выполненные в срок работы за минимальную стоимость любой сложности. "
            }
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={""}
          />
        </div>
      </div>
      <HeadText>Популярные услуги</HeadText>
      <div className={styles.info}>
        <div className={styles.line}>
          <Card
            image={steklo}
            textImage={"Замена стекла от 45р"}
            description={
              "Не обязательно менять весь дисплей, у нас вы можете заменить только стекло. Мы поможем вам сэкономить."
            }
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={"Замена дисплея от 50р"}
            description={
              "Заменим дисплей по низкой цене. Наши сотрудники имеют более 10 лет опыта. Даём гарантию 60+ дней"
            }
            image={display}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={"Замена АКБ от 15р"}
            image={akb}
            description={
              "Поможем подобрать подходящую вам по цене, сделаем быстро и качественно."
            }
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
        </div>
        <div className={styles.line}>
          <Card
            image={gnezdo}
            textImage={"Замена разъема от 28р"}
            description={""}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={"Замена корпуса от 20р"}
            description={""}
            image={korpus}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={"Замена камеры от 28р"}
            image={kamera}
            description={""}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
