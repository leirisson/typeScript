import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartContDownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>

            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput
                     type="text" 
                     list="task-suggestions"
                     placeholder="Dê um nome para o seu projeto" 
                     id="task" 
                     />

                     <datalist id="task-suggestions">
                        <option value="porjeto 1"></option>
                        <option value="projeto 2"></option>
                        <option value="projeto 3"></option>
                        <option value="projeto 4"></option>
                        <option value="teste"></option>
                     </datalist>

                    <label htmlFor="minutes">durante</label>
                    <MinuteAmountInput 
                    type="number" 
                    placeholder="00" 
                    id="minutesAmount" 
                    step={5}
                    min={5}
                    max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>


                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartContDownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartContDownButton>
            </form>

        </HomeContainer>
    )
}