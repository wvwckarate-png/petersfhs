// Leg attacks. Only the straight ankle lock is included in this hub; heel hooks, knee reaping, and neck cranks are left to a coach on a mat.
export const LEGS = [
  {
    id: "ankle-lock", name: "Straight Ankle Lock", family: "legs", role: "top",
    keys: ["Control the foot", "Hips forward", "Squeeze, don't crank"],
    one: "A submission where you trap their foot against your body and extend their ankle. It's one of the first safe leg attacks and it's allowed at blue belt.",
    goals: ["Control one foot with the blade of your forearm under their Achilles.", "Pin the leg against your hip.", "Arch your hips forward and squeeze slowly until they tap."],
    controls: ["Arms: one forearm under the heel of their foot, the other hand gripping your own wrist.", "Hips: tight against their leg.", "Legs: your legs on both sides of their leg.", "Eyes on their hands: they may try to grab your foot."],
    moves: [["From the top (open guard)", "Pass their legs, trap a foot against your body and lean back."], ["From the bottom (open guard)", "Put your feet on their hips, slide a leg inside, and trap the other foot."], ["Transition to a sweep", "If they pull their leg out, stand up and pass."], ["Safe release", "Release the lock the second they tap or say stop."]],
    defense: ["They rotate the toes toward your hip.", "They pull their foot out as your hips come forward.", "They sit up and grab your wrists.", "They push your hips away with a frame."],
    mistakes: ["Cranking the ankle fast: you can injure your training partner.", "Twisting the foot: it's a straight lock, not a heel hook.", "Letting them kick free with the other foot.", "Never applying it on a hard floor."],
    gi: ["Control their pants at the ankle.", "Use their lapel to hold a leg."],
    nogi: ["Use a strong forearm and tight wrist grip.", "Keep their leg against your stomach."],
    solo: ["Hip extension: 3 sets of 10 slow arches while lying on your back.", "Forearm grip: practice the wrist grip with a rolled towel."],
    partner: ["Set it up slowly: lock the foot and stop short of pressure. 8 reps each side.", "Defend and counter: partner sets the lock; you rotate and pull the foot out.", "Chain: pass a leg, set the lock, and let go."],
    spar: { start: "Top: foot trapped under your arm. Bottom: both feet free.", topGoal: "Apply slow pressure for a tap.", bottomGoal: "Rotate and pull the foot out.", cues: ["Bottom partner stays still, tap at light pressure.", "Bottom partner can rotate once.", "Bottom partner defends fully."] },
  },
];
