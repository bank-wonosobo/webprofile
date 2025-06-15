"use client";

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

export default function MapClient() {
	return (
		<div className="container  mx-auto sm:w-full md:w-3/4 lg:w-1/2 aspect-video px-4 mb-8">
			<h2 className="text-black font-bold text-center text-2xl lg:text-3xl mb-8">
				Peta Lokasi Kantor Bank Wonosobo
			</h2>
			<MapContainer
				center={[-7.370330100511285, 109.90063938127236]}
				zoom={12}
				scrollWheelZoom={true}
				className="w-full h-full rounded-xl z-0">
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{/* Marker 1 */}
				<Marker position={[-7.370330100511285, 109.90063938127236]}>
					<Popup>
						PD BPR Bank Wonosobo <br /> Jl. A. Yani No.rt 03 160, Pensil Sari,
						Wonosobo Timur{" "}
						<span>
							<a
								href="https://maps.app.goo.gl/MTUSdeis6KGB9DQ96"
								target="_blank">
								Lihat di Maps
							</a>
						</span>
					</Popup>
				</Marker>

				{/* Marker 2 */}
				<Marker position={[-7.3277158054929155, 109.90243851425303]}>
					<Popup>
						Kantor kas Mojotengah <br /> Jalan Raya Kalibeber Km 3, Mojotengah,
						Kalibeber, Kec. Mojotengah
					</Popup>
				</Marker>

				{/* Marker 3 */}
				<Marker position={[-7.411556831536904, 109.88567838926883]}>
					<Popup>
						Bpr Bank Wonosobo <br /> Jl. Raya Brengkok - Banjarnegara 32,
						Kradenan, Selomerto, Kec. Selomerto{" "}
						<span>
							<a
								href="https://maps.app.goo.gl/RphhddnX6uPNQJUn8"
								target="_blank">
								Lihat di Maps
							</a>
						</span>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
