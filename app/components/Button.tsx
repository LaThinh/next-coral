import React from "react";

export default function Button({
	link,
	text,
	size,
	color,
	rounded,
}: {
	link: string;
	text: string;
	size?: "small" | "medium" | "large";
	color?: "gray" | "white" | string;
	rounded?: string;
}) {
	return (
		<a href={link} className={`${size || "medium"} bg-${color} rounded-${rounded}`}>
			{text}
		</a>
	);
}
