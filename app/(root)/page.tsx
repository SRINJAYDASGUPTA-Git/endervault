import HeaderBox from "@/components/shared/HeaderBox";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Srinjay" };
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
      </div>
    </section>
  );
};

export default Home;
