import { UIDGenerator } from "../../domain/utils/uid-generator";
import { v4 as uuidv4 } from 'uuid';

export class UIDGeneratorImplementation implements UIDGenerator{

    generate(): string {
        return uuidv4()
    };
}