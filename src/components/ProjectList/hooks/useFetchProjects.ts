import { useEffect, useState } from "react";
import axios from "axios";

import type { Project } from "../../../stores/redux/asyncActions";

export const useFetchProjects = () => {
  const [status, setStatus] = useState<string>("idle");
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    setStatus("loading");
    axios
      .get("https://api.novafps.com/projects/all")
      .then((response) => {
        setStatus("success");
        setProjects(response.data);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return { status, projects };
};