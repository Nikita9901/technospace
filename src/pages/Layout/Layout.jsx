import React, { useRef, useState } from "react";
import { Button, HeadText, Card } from "./components";
import { CSSTransition } from "react-transition-group";
import MaskedInput from "react-maskedinput";
import text1 from "./images/1.svg";
import text2 from "./images/2.svg";
import text3 from "./images/3.svg";
import text4 from "./images/4.svg";
import text5 from "./images/5.svg";
import text6 from "./images/6.svg";
import head1 from "./images/1_head.svg";
import head2 from "./images/2_head.svg";
import head3 from "./images/3_head.svg";
import head4 from "./images/4_head.svg";
import head5 from "./images/5_head.svg";
import head6 from "./images/6_head.svg";
import head7 from "./images/7_head.svg";
import head8 from "./images/8_head.svg";
import head9 from "./images/9_head.svg";
import application from "./images/application.png";
import geo from "./images/geo.png";
import close from "./images/close.png";
import price from "./images/price.png";
import display from "./images/steklo.png";
import map from "./images/map.png";
import cura from "./images/cura.png";
import korpus from "./images/korpus.png";
import kach from "./images/kach.png";
import steklo from "./images/display.png";
import kamera from "./images/kamera.png";
import akb from "./images/akb.png";
import gnezdo from "./images/gnezdo.png";
import styles from "./Layout.module.css";

const Layout = () => {
  const [formActive, setFormActive] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [resultMessage, setResultMessage] = useState({
    isShow: false,
    text: "",
  });
  const nodeRef = useRef(null);

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
      <CSSTransition
        in={resultMessage.isShow}
        nodeRef={nodeRef}
        timeout={100000}
        classNames="alert"
        unmountOnExit
        onEnter={() => setFormActive(false)}
        onExited={() => null}
      >
        <div className={styles.otvet}>
          {resultMessage.text}
          <img
            src={close}
            alt=""
            className={styles.closeImage}
            onClick={() => {
              setResultMessage({
                isShow: false,
                text: "",
              });
            }}
          />
        </div>
      </CSSTransition>
      {/*{!resultMessage ? (<div className={styles.otvet}>Oshibka</div>) : null}*/}
      {formActive ? (
        <div className={styles.formBlock}>
          <form
            className={styles.forms}
            id="telegramForm"
            onSubmit={async (event) => {
              event.preventDefault();
              if (name === "") {
                await setResultMessage({
                  isShow: true,
                  text: "Укажите ваше имя!",
                });
                return;
              }
              if (phone === "") {
                await setResultMessage({
                  isShow: true,
                  text: "Укажите номер телефона!",
                });
                return;
              }
              if (description === "") {
                await setResultMessage({
                  isShow: true,
                  text: "Укажите проблему и модель!",
                });
                return;
              }

              try {
                let response = await fetch("/telegram", {
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
                window.gtag("event", "", {
                  event_category: "",
                  event_action: "Lead",
                });
                window.gtag("event", "sendForm", {
                  formName: "Lead",
                  formURL: "technospace.by",
                });
                // alert("Успешно отправлено!!!");
                await setResultMessage({
                  isShow: true,
                  text: "Успешно отправлено!",
                });
                await setFormActive(false);
              } catch (err) {
                // alert("Ошибка отправления");
                await setResultMessage({
                  isShow: true,
                  text: "Ошибка отправления",
                });
                // setTimeout(() => {
                //     setResultMessage(true)
                // }, 5*1000)
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
              required={true}
              name="description"
              placeholder="Укажите модель телефона и проблему"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              value={description}
            />
            <input
              required={true}
              className={styles.input}
              type="text"
              placeholder="Имя"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <MaskedInput
              required={true}
              mask={"+375 (11) 111-11-11"}
              className={styles.input}
              value={phone}
              type="tel"
              placeholder="+375 (__) ___-__-__"
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
            textImage={head4}
            description={text4}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={""}
          />
          <Card
            textImage={head5}
            description={text5}
            image={cura}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={""}
          />
          <Card
            textImage={head6}
            image={kach}
            description={text6}
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
            textImage={head1}
            description={text1}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={head2}
            description={text2}
            image={display}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={head3}
            image={akb}
            description={text3}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
        </div>
        <div className={styles.line}>
          <Card
            image={gnezdo}
            textImage={head7}
            description={""}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={head8}
            description={""}
            image={korpus}
            onClick={() => {
              setFormActive(true);
            }}
            buttonText={"Узнать точную стоимость"}
          />
          <Card
            textImage={head9}
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
