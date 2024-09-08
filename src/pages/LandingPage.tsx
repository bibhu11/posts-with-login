import Auth from "../Auth";

type LandingPageProps = {
  onLogin: () => void;
};
export default function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-12">
      <img src="landing-logo.png" alt="logo" width={40} height={40} />
      <Auth onLogin={onLogin} />
    </div>
  );
}
