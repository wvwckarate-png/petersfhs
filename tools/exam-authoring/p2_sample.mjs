import { S, M, G, fig } from "./pool.mjs";
import * as F from "./p2figs.mjs";

export const config = { hub: "physics2", prefix: "p2s", N: 0, file: "sample.js", title: "AP Physics 2 — Sample Exam", seed: 7, sample: true, note: "Short sample." };

export default [
  S(9,
    "A rigid sealed container holds an ideal gas at 200 K and pressure P. The gas is heated to 600 K. What is the final pressure?",
    ["P/3", "P", "3P", "9P"], 2,
    "At constant volume, P is proportional to the absolute temperature. The temperature triples, so the pressure triples: 3P."),
  M(9,
    "An ideal gas expands rapidly in an insulated cylinder, so that no heat flows into or out of the gas. What happens to the temperature of the gas?",
    ["It decreases, because the gas does work at the expense of its internal energy.", "It increases, because the gas has more room in which to move around.", "It stays the same, because no heat is exchanged with the surroundings.", "It cannot be determined without knowing the initial pressure of the gas."],
    "With Q = 0, the first law gives ΔU = −W_by. The expanding gas does positive work on its surroundings, so its internal energy decreases, and for an ideal gas this means the temperature falls."),
  S(10,
    "Two small charged spheres exert an electric force of magnitude F on each other. If the charge on each sphere is doubled and the distance between them is unchanged, what is the new force?",
    ["F", "2F", "4F", "8F"], 2,
    "By Coulomb's law the force is proportional to the product of the charges. Doubling both charges multiplies the force by 2 × 2 = 4."),
  G(11, {
    text: "Three resistors are connected in series with a 10 V battery that has negligible internal resistance, as shown.",
    figures: [fig(F.circuitSeries({ V: 10, rs: ["2 Ω", "3 Ω", "5 Ω"] }), "A series circuit with a 10 volt battery and three resistors of 2 ohms, 3 ohms, and 5 ohms in a single loop.")],
  }, [
    S(11, "What is the current in the circuit?",
      ["0.50 A", "1.0 A", "2.0 A", "5.0 A"], 1,
      "The total resistance is 2 + 3 + 5 = 10 Ω, so I = V/R = 10/10 = 1.0 A."),
    S(11, "What is the potential difference across the 5 Ω resistor?",
      ["1.0 V", "2.0 V", "5.0 V", "10 V"], 2,
      "V = IR = (1.0 A)(5 Ω) = 5.0 V. The battery's 10 V is divided among the resistors in proportion to their resistances."),
  ]),
  M(12,
    "A positive charge moves toward the top of the page in a uniform magnetic field directed out of the page, as shown. What is the direction of the magnetic force on the charge at the instant shown?",
    ["To the right", "To the left", "Toward the top of the page", "Into the page"],
    "Using F = qv × B with v along +y (up) and B along +z (out of the page): ŷ × ẑ = +x̂, which points to the right. For a positive charge the force is in the direction of v × B.",
    { figures: [fig(F.magneticField({ dir: "out", vdir: "up", q: "+" }), "A grid of dots showing a magnetic field directed out of the page. A positive charge in the middle moves toward the top of the page with a velocity arrow pointing up.", { maxWidth: 420 })] }),
  S(13,
    "An object is placed 20 cm from a thin converging lens that has a focal length of 10 cm. How far from the lens is the image?",
    ["10 cm", "20 cm", "30 cm", "40 cm"], 1,
    "From 1/f = 1/d_o + 1/d_i: 1/d_i = 1/10 − 1/20 = 1/20, so d_i = 20 cm. (An object at twice the focal length produces an image at twice the focal length.)"),
  S(14,
    "A sound wave in air has a wavelength of 0.50 m and a frequency of 680 Hz. What is the speed of the wave?",
    ["170 m/s", "340 m/s", "680 m/s", "1360 m/s"], 1,
    "v = fλ = (680)(0.50) = 340 m/s."),
  S(15,
    "What is the energy of a photon of light with a wavelength of 620 nm? (Use hc = 1240 eV·nm.)",
    ["1.0 eV", "2.0 eV", "3.0 eV", "4.0 eV"], 1,
    "E = hc/λ = 1240/620 = 2.0 eV."),
];
