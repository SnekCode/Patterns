import React, {useState} from 'react';
import {initState} from "./initState";
import Pattern from "./Components/Pattern/Pattern";
import { CompactPicker } from 'react-color';
import {updatePatternColumns, updatePatternRows} from "./Utils/utils";

const App:React.FC = () => {
    const [appState,setAppState] = useState(initState);
  return (
    <div className="app">
        <div className={'flex no-select'}>
        <div>
            <CompactPicker color={appState.currentColor} onChange={e => setAppState({...appState,currentColor: e.hex})}/>
        </div>
            <div>
                <div className={'tc h2 no-select'}
                 onClick={() => setAppState({...appState, xSym: !appState.xSym})}
                 style={{backgroundColor: `${appState.xSym ? 'lightgreen' : ''}`}}
                > X Symmetry </div>

                <div className={'tc h2 no-select'}
                 onClick={() => setAppState({...appState, ySym: !appState.ySym})}
                 style={{backgroundColor: `${appState.ySym ? 'lightgreen' : ''}`}}
                > Y Symmetry </div>

                <div className={'flex flex-column w4'}>
                        <div>Columns: </div>
                    <input value={appState.numberColumns} className={'w3 ml1'} min={'2'} type={'number'}
                           onChange={(e) => {
                               if(Number.parseInt(e.target.value) > 2) {
                                   const newNumber = Number.parseInt(e.target.value);
                                   const newPattern = updatePatternColumns(newNumber, appState.pattern);
                                   setAppState({...appState, pattern: newPattern, numberColumns: newNumber})
                               }else {
                                   const newNumber = 2;
                                   const newPattern = updatePatternColumns(newNumber, appState.pattern);
                                   setAppState({...appState, pattern: newPattern, numberColumns: newNumber})
                               }
                           }} />
                    </div>

                        <div>Rows: </div>
                    <input value={appState.numberRows} className={'w3 ml1'} min={'2'} type={'number'}
                           onChange={(e) => {
                               if(Number.parseInt(e.target.value) > 2) {
                                   const newNumber = Number.parseInt(e.target.value);
                                   const newPattern = updatePatternRows(newNumber, appState.pattern);
                                   setAppState({...appState, pattern: newPattern, numberRows: newNumber})
                               }else {
                                   const newNumber = 2;
                                   const newPattern = updatePatternRows(newNumber, appState.pattern);
                                   setAppState({...appState, pattern: newPattern, numberRows: newNumber})
                               }
                           }} />
                </div>

        </div>
      <Pattern state={[appState,setAppState]} pattern={appState.pattern}/>
    </div>
  );
};

export default App;
