import React, { useState } from "react";
import AdminHeader from "@/Components/Admin/AdminHeader";

export default function Authenticated({ children }) {
	return (
		<div>
			<AdminHeader />

			<main>{children}</main>
		</div>
	);
}
