import { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface FormDataInt {
  email: string;
  password: string;
  visible: boolean;
};

export default function Login() {
  /* useState */
  const [FormData, setFormData] = useState<FormDataInt>({
    email: "",
    password: "",
    visible: false
  });

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h1>Conecte-se</h1>
        <h2>Insira as suas informações abaixo para conectar-se</h2>

        <div className={styles.inputContainer}>
          <input
            placeholder="Insira seu endereço de e-mail"
            type="email"
            value={FormData.email}
            onChange={event => setFormData({ ...FormData, email: event.target.value })}
          />
        </div>

        <div className={styles.inputContainer}>
          <input
            placeholder={FormData.visible ? "Insira a sua senha" : "• • • • • • • • • • • • •"}
            type={FormData.visible ? "text" : "password"}
            value={FormData.password}
            onChange={event => setFormData({ ...FormData, password: event.target.value })}
          />

          <button
            className={styles.changeVisible}
            onClick={() => setFormData({ ...FormData, visible: !FormData.visible })}
            title={FormData.visible ? "Esconder caracteres da senha" : "Exibir caracteres da senha"}
          >
            {FormData.visible ? <FaRegEye className={styles.changeVisibleIcon} /> : <FaRegEyeSlash className={styles.changeVisibleIcon} />}
          </button>
        </div>

        <div className={styles.rowCenter}>
          <button
            className={styles.submitBtn}
            onClick={() => alert(`Email: ${FormData.email} - Password: ${FormData.password}`)}
          >
            ENTRAR
          </button>
        </div>
      </section>
    </main>
  );
}