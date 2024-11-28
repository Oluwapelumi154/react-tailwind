import Landing from "@Pages/Landing/Index";

type props= {
  Path: string,
  Component: React.FC
}

export const LandingPage = {
  Path: "/",
  Component: Landing,
};

export const Routes: Array<props>= [
  LandingPage
]