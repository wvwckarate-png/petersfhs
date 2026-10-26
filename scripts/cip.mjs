// Prints the CIP descriptors OpenChemLib computes for each stereo SMILES, so captions and answer keys are never guessed.
// Usage: node scripts/cip.mjs 'C[C@H](N)C(=O)O' 'C/C=C/C' ...
import OCL from "openchemlib";
for (const smi of process.argv.slice(2)) {
  const m = OCL.Molecule.fromSmiles(smi);
  m.ensureHelperArrays(OCL.Molecule.cHelperCIP);
  const out = [];
  for (let a = 0; a < m.getAllAtoms(); a++) {
    const p = m.getAtomCIPParity(a);
    if (p === 1) out.push(`${a + 1}${m.getAtomLabel(a)}:R`); else if (p === 2) out.push(`${a + 1}${m.getAtomLabel(a)}:S`);
  }
  for (let b = 0; b < m.getAllBonds(); b++) {
    const p = m.getBondCIPParity(b);
    if (p === 1) out.push(`bond${b}:E`); else if (p === 2) out.push(`bond${b}:Z`);
  }
  console.log(smi.padEnd(34), out.join("  ") || "(none)");
}
