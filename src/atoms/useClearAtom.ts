import { useCallback } from "react";

import atoms from "./atoms";

function useClearAtom(atomId: string): () => void {
  return useCallback(() => {
    atoms.clearAtom(atomId);
  }, [atomId]);
}

export default useClearAtom;
