import CertificateProps from "../interfaces/Certificate";
import Badge from "../assets/icon-badge.png";

function Certificate({ title, duration, issuer, logoURL }: CertificateProps) {
	return (
		<div className="grow rounded-md card-shadow text-white bg-blue-900 bg-opacity-50 p-5">
			<h2 className="text-xl font-medium  mb-4">{title}</h2>
			<div className="flex items-center mb-4">
				<img src={logoURL} alt="Organization Logo" className="w-10 h-10 rounded-sm inline-block mr-2 " />{" "}
				<span className="font-semibold">{issuer}</span>
			</div>
			<div className="flex items-center justify-between">
				<div className="bg-orange-400 bg-opacity-50 rounded-full px-3 py-1 w-fit font-semibold">{duration}</div>
				<img src={Badge} alt="Organization Logo" className="w-15 h-15 rounded-sm inline-block" />{" "}
			</div>
		</div>
	);
}

export default Certificate;
