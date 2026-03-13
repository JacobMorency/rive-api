const data = [
  {
    id: 1,
    name: "pull up",
    category: "back",
  },
  {
    id: 2,
    name: "incline db press",
    category: "chest",
  },
  {
    id: 3,
    name: "hacksquat",
    category: "quads",
  },
];

export const getAllExercises = (req, res) => {
  res.status(200).json(data);
};
