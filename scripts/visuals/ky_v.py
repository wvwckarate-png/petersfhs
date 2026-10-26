V = {}
LT = "plot; title=Length–tension relationship; x=Sarcomere length (μm); y=Active force (% of max); xlim=1.2:4.2; ylim=0:110; xticks=1.6,2.0,2.2,3.6; yticks=0,50,100; line=1.3,0 1.6,50 2.0,100 2.2,100 2.6,85 3.0,50 3.6,0 | #C0392B; band=2.0,2.2 Optimal | #E4F1E0"
FV = "plot; title=Force–velocity relationship; x=Velocity (eccentric ← 0 → concentric); y=Force (% of isometric); xlim=-10:10; ylim=0:180; xticks=0; yticks=0,100; line=-10,165 -5,150 -1,125 0,100 2,80 5,45 8,15 10,0 | #C0392B; vline=0 Isometric | #888"
GRF = "plot; title=Vertical GRF in running (one stance); x=Time (s); y=Force (body weights); xlim=0:0.3; ylim=0:3.5; xticks=0,0.1,0.2,0.3; yticks=0,1,2,3; line=0,0 0.03,2.2 0.06,1.8 0.12,2.7 0.2,1.2 0.25,0 0.3,0 | #C0392B"
WGRF = "plot; title=Vertical GRF in walking (one stance); x=% of stance; y=Force (body weights); xlim=0:100; ylim=0:1.4; xticks=0,25,50,75,100; yticks=0,1; line=0,0 10,1.1 25,0.85 50,0.8 75,1.1 90,0.6 100,0 | #C0392B"
V[("kinesiology", 1)] = {
 "s11": [F("directional", "Directional terms in anatomical position: superior/inferior, anterior/posterior, medial/lateral, proximal/distal.")],
 "s12": [F("planes", "The three cardinal planes: sagittal, frontal (coronal), and transverse. Each movement happens in a plane around an axis.")],
 "s13": [F("flexion-extension", "Flexion and extension happen in the sagittal plane."), F("abduction-adduction", "Abduction, adduction, and circumduction happen in the frontal plane (and around it)."), F("body-movements", "Rotation and other movements in the transverse plane."), F("pronation-supination", "Pronation and supination of the forearm."), F("dorsi-plantar", "Dorsiflexion and plantarflexion of the ankle."), F("inversion-eversion", "Inversion and eversion of the foot.")],
 "s14": [S(GRF, "Kinetics: forces that cause motion. A runner's vertical ground reaction force peaks at 2–3 body weights.")],
}
V[("kinesiology", 2)] = {
 "s21": [F("fibrous-joints", "Fibrous joints (synarthroses): sutures, syndesmoses, gomphoses."), F("cartilaginous-joints", "Cartilaginous joints (amphiarthroses)."), F("synovial-types", "The six types of synovial joints: hinge, pivot, ball-and-socket, condyloid, saddle, and plane.")],
 "s22": [F("synovial-joint", "A synovial joint: capsule, synovial membrane, fluid, and articular cartilage."), F("bursa", "A bursa reduces friction between tendon and bone."), F("knee-joint", "The knee: menisci, cruciate ligaments, and collateral ligaments.")],
 "s23": [F("body-movements", "Range of motion is measured in degrees with a goniometer.")],
 "s24": [F("shoulder-joint", "The shoulder is highly mobile (shallow socket) and needs muscles to stabilize."), F("hip-joint", "The hip is stable (deep socket) and has less mobility.")],
}
V[("kinesiology", 3)] = {
 "s31": [F("contraction-types", "Isometric, concentric, and eccentric contractions.")],
 "s32": [S(LT, "Length–tension relationship: active force peaks near the resting length of the sarcomere."), S(FV, "Force–velocity relationship: force falls as shortening speed rises; eccentric force is higher than isometric."), F("muscles-ant-post", "Muscles of the body (anterior and posterior views): parallel, pennate, and convergent architectures.")],
 "s33": [F("leg-muscles", "The calf muscles and the Achilles tendon store and return elastic energy in the stretch–shortening cycle.")],
 "s34": [F("gluteal-muscles", "Hip flexors and extensors: tight iliopsoas and weak glutes are part of lower crossed syndrome."), F("back-muscles", "Upper crossed syndrome: tight upper trapezius and weak deep neck flexors and lower trapezius.")],
}
V[("kinesiology", 4)] = {
 "s41": [S("lever; class=3", "A force acts at a distance from the axis: torque = force × moment arm.")],
 "s42": [S("lever; class=1", "First class: the fulcrum is between the effort and the resistance."), S("lever; class=2", "Second class: the resistance is between the fulcrum and the effort."), S("lever; class=3", "Third class: the effort is between the fulcrum and the resistance (most muscles).")],
 "s43": [F("humerus-muscles", "The biceps inserts close to the elbow (a short effort arm), so it works at a mechanical disadvantage but gives speed and range at the hand.")],
 "s44": [S("plot; title=Strength curve (biceps curl); x=Elbow angle (°); y=Torque (N·m); xlim=0:150; ylim=0:90; xticks=0,30,60,90,120,150; yticks=0; line=10,25 30,50 60,75 90,80 120,70 140,45 | #C0392B", "The strength curve: a muscle's torque varies through the range of motion.")],
}
V[("kinesiology", 5)] = {
 "s51": [S("plot; title=Sprint velocity; x=Time (s); y=Velocity (m/s); xlim=0:10; ylim=0:12; xticks=0,2,4,6,8,10; yticks=0,5,10; line=0,0 1,4 2,6.5 4,8.8 6,9.8 8,10.2 10,10.1 | #C0392B", "Velocity is the slope of position; acceleration is the slope of velocity: a sprinter accelerates quickly and then reaches a nearly constant top speed.")],
 "s52": [S("plot; title=Projectile path; x=Horizontal distance (m); y=Height (m); xlim=0:20; ylim=0:7; xticks=0,5,10,15,20; yticks=0; line=0,0 3,3.5 5,5 7,5.9 10,6.2 13,5.9 15,5 17,3.5 20,0 | #C0392B", "A projectile follows a symmetric parabola (ignoring air resistance)."), S("plot; title=Range vs. release angle; x=Release angle (°); y=Range (% of max); xlim=0:90; ylim=0:110; xticks=0,15,30,45,60,75,90; yticks=0,100; line=0,0 15,50 30,87 45,100 60,87 75,50 90,0 | #C0392B; vline=45 45° | #002855", "With equal release and landing heights, 45° gives the longest range.")],
 "s53": [F("pressures", "Newton's third law: when the lungs push air out, the air pushes back; in running, the ground pushes you forward as you push it back.")],
 "s54": [S(GRF, "Ground reaction force in running: an impact peak followed by an active push-off peak."), S(WGRF, "Walking GRF has two humps (heel strike and push-off) and stays near 1.1 body weights.")],
 "s55": [S("plot; title=Power–load relationship; x=Load (% of max force); y=Power (% of max); xlim=0:100; ylim=0:110; xticks=0,33,67,100; yticks=0,100; line=0,0 15,50 33,100 50,90 70,60 100,0 | #C0392B; vline=33 ≈ 1/3 max force | #002855", "Power (force × velocity) peaks at about one-third of maximal force and velocity."), S("bars; title=Where the energy goes; y=% of energy; data=Mechanical work:25:#2E6BC6, Heat:75:#C0392B; max=100; unit=%", "Muscles are about 25% efficient: most chemical energy becomes heat.")],
}
V[("kinesiology", 6)] = {
 "s61": [F("body-movements", "Angular motion: segments rotate about joint axes; points farther from the axis move faster (v = ω × r).")],
 "s63": [F("directional", "In anatomical position, the center of mass of an adult lies at about 55–57% of standing height.")],
 "s64": [S("plot; title=Drag vs. speed; x=Speed (km/h); y=Drag (relative); xlim=0:60; ylim=0:100; xticks=0,10,20,30,40,50,60; yticks=0; line=0,0 10,3 20,11 30,25 40,44 50,69 60,100 | #C0392B", "Drag rises with the square of speed: doubling speed quadruples drag.")],
}
V[("kinesiology", 7)] = {
 "s71": [F("pectoral-girdle", "The pectoral girdle: clavicle and scapula attach the arm to the trunk at the sternoclavicular joint."), F("scapula", "The scapula: acromion, coracoid, glenoid, and the scapular spine."), F("shoulder-joint", "The glenohumeral joint with its labrum, capsule, and ligaments.")],
 "s72": [F("humerus-muscles", "Rotator cuff and deltoid, teres major, and latissimus dorsi."), F("pectoral-muscles", "Serratus anterior, pectoralis minor, and pectoralis major."), F("back-muscles", "Trapezius, rhomboids, levator scapulae, and latissimus dorsi.")],
 "s73": [F("flexion-extension", "Shoulder flexion and extension."), F("abduction-adduction", "Abduction: the scapula rotates upward about 1° for every 2° of humeral motion (scapulohumeral rhythm).")],
 "s74": [F("shoulder-joint", "Impingement, rotator cuff tears, and anterior dislocation (and the Bankart lesion)."), F("pectoral-girdle", "AC separation and clavicle fractures.")],
}
V[("kinesiology", 8)] = {
 "s81": [F("elbow-joint", "The elbow: humeroulnar and humeroradial joints, with the annular and collateral ligaments."), F("ulna-radius", "The radius rotates around the ulna in pronation and supination."), F("forearm-muscles", "Forearm flexors, extensors, pronators, and supinators."), F("pronation-supination", "Pronation (palm down) and supination (palm up).")],
 "s82": [F("hand-bones", "The carpal bones, metacarpals, and phalanges."), F("carpal-tunnel", "The carpal tunnel: the median nerve and nine flexor tendons pass under the flexor retinaculum."), F("hand-muscles", "Intrinsic muscles of the hand: thenar, hypothenar, lumbricals, and interossei.")],
 "s83": [F("forearm-muscles", "Tennis elbow (lateral epicondylitis) and golfer's elbow (medial epicondylitis) are tendon overuse conditions at the common extensor and flexor origins.")],
}
V[("kinesiology", 9)] = {
 "s91": [F("hip-bone", "The hip bone: ilium, ischium, and pubis meet at the acetabulum."), F("hip-joint", "The hip joint: a deep ball-and-socket joint with a labrum and strong ligaments."), F("femur", "The femur: head, neck, and trochanters; the neck angle is about 125°.")],
 "s92": [F("gluteal-muscles", "The gluteal muscles, tensor fasciae latae, piriformis, and the deep rotators."), F("muscles-ant-post", "The hip flexors (iliopsoas, rectus femoris), adductors, and hamstrings.")],
 "s93": [F("pelvis", "The pelvis: the sacroiliac joints and the pubic symphysis."), F("pelvic-ligaments", "The ligaments of the pelvis."), F("pelvis-sex", "The female pelvis (right) is wider, with a larger subpubic angle.")],
 "s94": [F("hip-oa", "Hip osteoarthritis: joint-space narrowing and bone spurs.")],
}
V[("kinesiology", 10)] = {
 "s101": [F("knee-joint", "The knee: femoral condyles, tibial plateau, menisci, and ligaments."), F("femur", "The femur and patella."), F("q-angle", "The Q angle between the quadriceps' line of pull and the patellar tendon.")],
 "s102": [F("muscles-ant-post", "The quadriceps extend the knee and the hamstrings flex it."), F("leg-muscles", "The popliteus unlocks the knee.")],
 "s103": [S("bars; title=Knee loads (× body weight); y=× body weight; data=Standing:0.5:#2E6BC6, Walking:2.5:#C99700, Stairs/(patellofemoral):3:#C99700, Deep squat:7:#C0392B; max=8", "Approximate knee joint forces: they rise steeply with deeper flexion and activity.")],
 "s104": [F("knee-injury", "ACL and PCL injuries and the meniscus: the 'unhappy triad' injures the ACL, MCL, and medial meniscus."), F("tibia-fibula", "Osgood–Schlatter disease: the tibial tuberosity.")],
}
V[("kinesiology", 11)] = {
 "s111": [F("ankle-joints", "The ankle: talocrural and subtalar joints with their ligaments."), F("foot-bones", "The tarsals, metatarsals, and phalanges; the medial longitudinal arch.")],
 "s112": [F("leg-muscles", "The calf muscles (gastrocnemius, soleus), tibialis anterior, tibialis posterior, and the fibularis muscles."), F("foot-muscles", "Intrinsic muscles of the foot and the plantar fascia.")],
 "s113": [F("inversion-eversion", "Pronation and supination of the foot involve inversion/eversion with dorsiflexion/plantarflexion."), F("dorsi-plantar", "Dorsiflexion and plantarflexion.")],
 "s114": [F("ankle-joints", "The anterior talofibular ligament is the one most often sprained in an inversion injury."), F("tibia-fibula", "The syndesmosis between the tibia and fibula: a high ankle sprain.")],
}
V[("kinesiology", 12)] = {
 "s121": [F("vertebral-column", "The curves of the vertebral column: cervical lordosis, thoracic kyphosis, lumbar lordosis, and the sacrum."), F("vertebra", "A typical vertebra: body, arch, and processes."), F("disk", "The intervertebral disc: annulus fibrosus and nucleus pulposus."), F("herniated-disk", "A herniated disc presses on a nerve root.")],
 "s122": [F("abdominal-muscles", "The abdominal muscles: rectus abdominis, obliques, and transversus abdominis."), F("back-muscles", "The erector spinae, multifidus, and thoracolumbar fascia."), F("diaphragm", "The diaphragm and intra-abdominal pressure stiffen the trunk.")],
 "s123": [F("abnormal-curves", "Postural deviations: scoliosis, kyphosis, and lordosis.")],
 "s124": [F("herniated-disk", "Disc herniation, sciatica, and spinal stenosis."), F("lumbar", "Spondylolysis and spondylolisthesis in the lumbar spine.")],
}
V[("kinesiology", 13)] = {
 "s131": [S(WGRF, "Walking: the vertical ground reaction force has two peaks (loading and push-off)."), F("leg-muscles", "The calf muscles push off; the tibialis anterior lowers the foot at heel strike.")],
 "s132": [S(GRF, "Running: a flight phase, and one peak of 2–3 body weights through each stance."), F("foot-muscles", "The arch and plantar fascia store and return elastic energy.")],
 "s133": [F("gluteal-muscles", "The hip hinge and squat load the hip extensors (gluteus maximus) and the quadriceps."), F("knee-joint", "Keep the knees tracking over the toes in a squat or lunge.")],
 "s134": [F("knee-injury", "Landing with the knees collapsing inward (valgus) increases ACL strain."), F("humerus-muscles", "Throwing: energy flows from the legs and trunk up through the shoulder and arm (the kinetic chain).")],
 "s135": [F("q-angle", "Alignment screens (Q angle, genu valgum) and functional tests help to spot injury risk.")],
}
