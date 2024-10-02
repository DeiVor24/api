import { request } from "express";

 let schedule = [
        ["Pirmadienio pirma pamoka", "Pirmadienio antra pamoka"],
        ["Antradienio pirma pamoka", "Antradienio antra pamoka"],
        ["Treciadienio pirma pamoka", "Treciadienio antra pamoka"],
        ["Ketvirtadienio pirma pamoka", "Ketvirtadienio antra pamoka"],
        ["Penktadienio pirma pamoka", "Penktadienio antra pamoka"],
        [],
        []
    ];

  
    export const savaitesTvarkarastis = (request,Response) => { 
        res.status(200).json({ schedule });
    };
