import { useState } from "react";
import { BundleType } from "./types";
import { baseApiUrl } from "@/consts";

type ReturnType = {
  bundles: BundleType[];
  err: string;
};

const getBundlesEndpoint = "/bundles";

export function useBundleQuery(): ReturnType {
  const [bundles, setBundles] = useState<BundleType[]>([]);
  const [err, setErr] = useState<string>("");

  const fetchBundles = async () => {
    // const response = await fetch(baseApiUrl + getBundlesEndpoint);
    // const data = await response.json() as BundleType[];
    // setBundles(data);
    await fetch(baseApiUrl + getBundlesEndpoint)
      .then((res) => res.json())
      .then((data: BundleType[]) => setBundles(data))
      .catch(() => setErr("something went wroung"));
  };

  fetchBundles();

  //   const { method } = req;

  //   switch (method) {
  //     case "GET":
  //       res.status(200).json(todos);
  //       break;
  //     case "POST":
  //       const { todo, completed } = req.body;
  //       todos.push({
  //         id: todos.length + 1,
  //         todo,
  //         completed,
  //       });
  //       res.status(200).json(todos);
  //       break;
  //     default:
  //       res.setHeader("Allow", ["GET", "POST"]);
  //       res.status(405).end(`Method ${method} Not Allowed`);
  //       break;
  //   }

  return { bundles, err };
}
