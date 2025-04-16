import TopPageHeader from "./top-page-components/top-page-header-components/top-page-header-components";
import TopPageFooter from "./top-page-components/top-page-footer-components/top-page-footer-components";
import TopPageMainVisual from "./top-page-components/top-page-main-visual-components/main-visual-components";

export default function Home() {
  return (
    <div>
      <TopPageHeader/>
      <TopPageMainVisual/>
      <TopPageFooter/>
    </div>
  );
}
