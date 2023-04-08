"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

// export default function AdminPage() {
//   return <NextStudio config={config} />;
// }

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
