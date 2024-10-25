import { IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";
import { getCatPhoto } from "@/lib/unsplash";

export const revalidate = 3600;

export const metadata = {
	title: "404: That page doesn't exist",
};

export default async function NotFound() {
	const photo = await getCatPhoto();

	return (
		<div className="text-lg md:text-xl">
			<h2 className="mb-4 bg-gradient-to-b from-red-600 to-red-700 bg-clip-text text-3xl font-extrabold text-transparent dark:from-red-300 dark:to-red-400 md:text-4xl">
				404: No existe
			</h2>

			<div className="relative mt-6 w-fit overflow-hidden rounded-2xl border-zinc-400/50 bg-zinc-200 drop-shadow-sm dark:bg-zinc-800">
				<IconLoader2
					className="absolute inset-0 m-auto animate-spin"
					size={48}
				/>

				<Image
					src={photo.src}
					alt="A cat"
					className="relative z-10"
					width={800}
					height={600}
					unoptimized
				/>
			</div>
		</div>
	);
}
