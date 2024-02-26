import Menu from "./menu/menuStrings.js";
import Actions from "./actions list one/actionStrings.js";
import ActionBlock from "./action list two/ActionBlock.js";
import TipsBlock from "./tips/tipsBlock.js";
import Information from "./Information/InformationBox.js";
import TipsButton from "./tipsButton.js";
import Instagram from "./instPost/instagram.js";
import QuestionBut from "./questionBut.js";
import Footer from "./footer/footer.js";
import Modal from "./modalCopyPlantage.js";
import Products from "./productsList/productsList.js";

function App() {
  return (
    <>
      <Modal />
      <Menu />
      <Actions />
      <Products />
      <ActionBlock />
      <TipsBlock />
      <Information />
      <TipsButton />
      <Instagram />
      <QuestionBut />
      <Footer />
    </>
  );
}

export default App;
