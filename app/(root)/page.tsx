import HeaderBox from "@/components/shared/HeaderBox";
import RightSidebar from "@/components/shared/RightSidebar";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Srinjay", lastName: "Das Gupta", email:'dasguptasrinjay2004@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome "
            subtitle="Access and manage your account and transactions efficiently."
            user={loggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user = {loggedIn} transactions={[]} banks={[{currentBalance:150.50}, {currentBalance:150.50}]} />
    </section>
  );
};

export default Home;
