import express from 'express';
import {savaitesTvarkarastis} from './scheduleController.js';



const router = express.Router();

router.get('/savaites',savaitesTvarkarastis);
router.get('/:dienos',dienosTvarkarastis);
