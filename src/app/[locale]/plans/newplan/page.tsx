"use client"
import { useRouter } from "@/i18n/navigation";
import { postPlan } from "@/services/plans";
import Link from "next/link";
import { useState } from "react";

export default function NewPlan() {
    const router = useRouter();
    const [image, setImage] = useState("");
    const [tripname, setName] = useState("");
    const [estimatedPrice, setEstimatedPrice] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [recomendations, setRecomendations] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        try {
            await postPlan(tripname, image, estimatedPrice, address, description, estimatedTime, recomendations);
            router.push("/plans");
        } catch (err) {
            setError("No se pudo crear el plan, revisa los datos");
            console.error(err);
        }
    };

    return (
        <div className="flex-1 bg-slate-50 px-24 py-16 flex-col">
            <h1 className="text-5xl font-bold text-slate-900">Crear nuevo plan</h1>
            <p className="text-lg text-slate-700 mt-4">
                Organiza, invita a tus amigos y disfruta de tu viaje con nuestro planificador de viajes.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col mt-8 border-2 bg-white p-8 rounded-lg border-b-blue-200" style={{ overflowY: "auto", height: "50%" }}>
                <div className="grid grid-cols-2 gap-40">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Foto del plan</h2>
                    <p className="text-slate-700">Copia el enlace de una imagen</p>
                </div>
                <div className= "bg-card flex flex-col items-center justify-center rounded-2xl p-6 border-3 border-dashed border-border">
                    <p className= " text-gray-500">Haz que tu plan destaque a primera vista</p>
                    
                    <input
                        type="text"
                        placeholder="https://..."
                        className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 w-full"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Nombre del plan*</h2>
                
                        <input
                            type="text"
                            required
                            placeholder="Ej. Vacaciones de playa"
                            className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 w-full"
                            value={tripname}
                            onChange={(e) => setName(e.target.value)}
                        />
               
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Dirección*</h2>
                
                        <input
                            type="text"
                            required
                            placeholder="Ej. Bahía de las brisas"
                            className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 w-full"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                
                <div className="grid grid-cols-2 gap-2">
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">Precio estimado*</h2>
                    
                            <input
                                type="text"
                                placeholder="Ej. 25000"
                                required
                                className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                                value={estimatedPrice}
                                onChange={(e) => setEstimatedPrice(e.target.value)}
                            />
                    
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">Duración (minutos)*</h2>
                    
                            <input
                                type="text"
                                placeholder="Ej. 120"
                                required
                                className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                                value={estimatedTime}
                                onChange={(e) => setEstimatedTime(e.target.value)}

                            />
                   
                </div>
                <div className="grid grid-cols-2 gap-40">
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">Descripción*</h2>
                    <p className="text-slate-700">0/600</p>
                </div>
            
                        <input
                            type="text"
                            placeholder="Cuentale a todos cual es el plan"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={600}
                            className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 h-40 "
                            
                        />
              
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Recomendaciones para los asistentes</h2>
                <p className="text-slate-500">Agrega tips como vestimenta adecuada, horarios de llegada, etc.</p>
                
                        <input
                            type="text"
                            placeholder="Ej. Lleva bloqueadorm agua, etc."
                            className="border border-slate-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            value={recomendations}
                            onChange={(e) => setRecomendations(e.target.value)}
                        />
               
                <div className="grid grid-cols-2 gap-40 mt-3.5">
                    <Link href="/plans" className=" text-gray-600 font-semibold rounded-xl px-6 py-3 cursor-pointer border-2 border-gray-600">
                        Cancelar
                    </Link>
                    <button type="submit" className="bg-blue-600 text-white text-lg font-semibold rounded-xl px-6 py-3 cursor-pointer">
                        Crear plan
                    </button>
                </div>
            </form>
        </div>
    );
}

