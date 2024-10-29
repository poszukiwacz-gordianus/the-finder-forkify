import Modal from "./Modal";
import NewRecipeForm from "./NewRecipeForm";

export default function AddRecipe() {
  <>
    <Modal>
      <Modal.Open>
        <button>Add Recipe</button>
      </Modal.Open>
      <Modal.Window>
        <NewRecipeForm />
      </Modal.Window>
    </Modal>
  </>;
}
