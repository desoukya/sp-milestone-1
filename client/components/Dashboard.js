import styles from "../styles/Home.module.css";
import AccountList from "./AccountList";
import BalanceList from "./BalanceList";

export default function Dashboard() {
  return (
    <div className={styles.App} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",}}>
      <div className="row ">
        <div class="col-sm-6">
          <AccountList />
        </div>
        <div class="col-sm-6">
          <BalanceList />
        </div>
      </div>
    </div>
  );
}
