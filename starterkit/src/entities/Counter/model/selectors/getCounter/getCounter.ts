import {StateSchema} from "@/app/providers/StoreProvider/types/StateSchema";

export const getCounter = (state: StateSchema) => state.counter;
