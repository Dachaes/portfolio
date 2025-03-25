import styles from "./Start.module.css";

export default function Start() {
  return(
    <div className={` ${styles.base}`}>
      <p className={`${styles.typing1}`}>안녕하세요.</p>
      <p className={`${styles.typing2}`}>프론트엔드 개발자 전소현입니다.</p>
    </div>
  );
}