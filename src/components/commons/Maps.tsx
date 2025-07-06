"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Safe fix for marker icon path in Next.js with proper typing
interface IconWithGetUrl extends L.Icon.Default {
	_getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as IconWithGetUrl)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface Office {
	id: string;
	name: string;
	address: string;
	latitude: string;
	longitude: string;
	map_link: string;
}

export default function MapClient() {
	const [offices, setOffices] = useState<Office[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/offices?limit=50`
				);
				const json = await res.json();
				if (json.data) {
					setOffices(json.data);
				}
			} catch (error) {
				console.error("Gagal mengambil data kantor:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container mx-auto ">
			<div className=" mx-auto w-full aspect-video lg:aspect-[calc(4*3+1)/4] px-4 mb-8">
				<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-8">
					Peta Lokasi Kantor Bank Wonosobo
				</h2>
				<MapContainer
					center={[-7.3703301, 109.9006393]}
					zoom={12}
					scrollWheelZoom={true}
					className="w-full h-full rounded-xl z-0">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{offices.map((office) => (
						<Marker
							key={office.id}
							position={[
								parseFloat(office.longitude),
								parseFloat(office.latitude),
							]}>
							<Popup>
								<strong>{office.name}</strong>
								<br />
								{office.address}
								<br />
								<a
									href={office.map_link}
									target="_blank"
									rel="noopener noreferrer">
									Lihat di Maps
								</a>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</div>
	);
}
