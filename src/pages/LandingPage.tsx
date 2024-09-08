import Login from "../Login";

type LandingPageProps = {
    onLogin: () => void;
    };
export default function LandingPage({ onLogin }: LandingPageProps) {

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-12">
        <img
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <Login onLogin={onLogin} />
    </div>
  );
}
