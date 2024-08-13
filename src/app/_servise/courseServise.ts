interface courseServiseType {
  buy: (item: any) => Promise<any>;
  getCourselist: () => Promise<any>;
  deleteCourse: (id: any) => Promise<any>;
}

function courseServise(): courseServiseType {
  return {
    buy: async (item) => {
      const body = JSON.stringify(item);
      const result = await fetch("/api/course/buy", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      return res;
    },
    getCourselist: async () => {
      const result = await fetch("/api/course/courselist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      return res;
    },
    deleteCourse: async (id) => {
      const body = JSON.stringify(id);
      const result = await fetch("/api/course/delete", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      });
      const res = await result.json();
      return res;
    },
  };
}

export default courseServise;
