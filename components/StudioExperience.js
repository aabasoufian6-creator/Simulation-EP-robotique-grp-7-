"use client";
import { useEffect, useState } from "react";
import { EriccLabStage, NaoLabStage } from "./three/DynamicStages";

const DEFAULT_ERICC = {theta1:0,theta2:30,theta3:30,theta4:0,theta5:60,grip:25};
const DEFAULT_NAO = {RShoulderPitch:0,RShoulderRoll:-0.5,RElbowYaw:0,RElbowRoll:0.5,RWristYaw:0};

export default function StudioExperience({kind}) {
  const [q,setQ]=useState(kind === "ericc" ? DEFAULT_ERICC : DEFAULT_NAO);
  const [linked,setLinked]=useState(false);
  useEffect(()=>{
    setQ(kind === "ericc" ? DEFAULT_ERICC : DEFAULT_NAO);
    setLinked(false);
    const receive=(event)=>{
      if(event.origin !== window.location.origin || event.data?.source !== "g7-studio" || event.data?.kind !== kind)return;
      const data=event.data.joints;
      if(!data || typeof data!=="object" || Object.values(data).some(x=>typeof x!=="number"||!Number.isFinite(x)))return;
      setQ(data);
      setLinked(true);
    };
    window.addEventListener("message",receive);
    return ()=>window.removeEventListener("message",receive);
  },[kind]);
  const isEricc=kind==="ericc";
  const path=isEricc?"/studios/ericc-studio-v21.html":"/studios/nao-motion-lab-v21.html";
  return <section className="g7-experience" aria-label="Simulation et modèle 3D synchronisé">
    <div className="g7-experience-head">
      <div><span className="g7-eyebrow">POLYTECH MARSEILLE / LABORATOIRE INTERACTIF</span>
        <h2>{isEricc?"ERICC / Studio V21":"NAO / Motion Lab V2.1"}</h2>
        <p>Design et visualisation 3D de l’atelier · calculs et commandes conservés dans le simulateur scientifique.</p>
      </div>
      <span className={linked?"g7-link-state on":"g7-link-state"}>{linked?"● 3D synchronisée":"○ Connexion du simulateur…"}</span>
    </div>
    <div className="g7-experience-stage">
      <div className="g7-experience-view">
        {isEricc?<EriccLabStage q={q}/>:<NaoLabStage q={q}/>}
      </div>
      <div className="g7-experience-side">
        <span className="g7-eyebrow">VISUALISATION THREE.JS</span>
        <h3>Modèle 3D interactif</h3>
        <p>Les angles appliqués dans le simulateur ci-dessous pilotent aussi ce modèle 3D de l’interface Yassir.</p>
        <div className="g7-angles">{Object.entries(q).map(([k,v])=><div key={k}><span>{k}</span><strong>{Number(v).toFixed(1)}{k==='grip'?' mm':'°'}</strong></div>)}</div>
        <p className="g7-accuracy">Le rendu 3D est une représentation pédagogique stylisée. Les valeurs MGD/MGI, les validations et les exports de référence restent ceux du simulateur scientifique ci-dessous, pas ceux du rendu Three.js.</p>
      </div>
    </div>
    <div className="g7-engine-head"><div><span className="g7-eyebrow">MOTEUR SCIENTIFIQUE ORIGINAL</span><h3>Calculs, simulation et validation</h3></div><a href={path} target="_blank" rel="noopener noreferrer">Ouvrir en plein écran ↗</a></div>
    <iframe title={isEricc?"Moteur ERICC Studio V21":"Moteur NAO Motion Lab V2.1"} src={path} loading="eager" allow="fullscreen" />
  </section>
}
