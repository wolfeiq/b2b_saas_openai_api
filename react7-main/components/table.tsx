import { useEffect, useState, useRef, useCallback } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";
import { registerRenderer, textRenderer } from "handsontable/renderers"
// register Handsontable"s modules
registerAllModules();

//slay

const hotData = [
    ["www.linkedin.com/in/alex-smith/", "Alex"],
    [ ],
    [ ],
    [],
    [ ],
    [ ]
  ];


interface ExampleComponentProps {
    onUploadLeads: any;
    isLoading: boolean;
    setLeadList: any;
  }

  
  const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {

    registerRenderer("customStylesRenderer", (hotInstance, TD, ...rest) => {
        textRenderer(hotInstance, TD, ...rest);
    
        TD.style.fontWeight = "bold";
        TD.style.color = "light blue";
        TD.style.background = "#add8e6";
      });

  const hotRef = useRef<any>(null);
  const [output, setOutput] = useState("Click Load to load data from server");
  const [isAutosave, setIsAutosave] = useState(true);

  //let loadClickCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  let saveClickCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  
  const autosaveClickCallback = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = event.target as HTMLInputElement; // Asserting the type
    setIsAutosave(target.checked);
    if (target.checked) {
      setOutput("Changes will be autosaved");
    } else {
      setOutput("Changes will not be autosaved");
    }
  };
  
  useEffect(() => {
    let nice = "cool";
    const hot = hotRef.current!.hotInstance;

  //   loadClickCallback = useCallback(() => {
  //  fetch('https://handsontable.com/docs/scripts/json/load.json')
  //   .then(response => {
   //    response.json().then(data => {
  //       hot.loadData(data.data);
        // or, use `updateData()` to replace `data` without resetting states
   //      setOutput('Data loaded');
  //     });
  //   });
// }, []);

    saveClickCallback = () => {
      // save all cell's data
      fetch("https://handsontable.com/docs/scripts/json/save.json", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: hot.getData() })
        
      })
        .then(response => {
          setOutput("Data saved");
          console.log(JSON.stringify({ data: hot.getData()}));
          nice = JSON.stringify({ data: hot.getData()});
          console.log(nice);
          
          props.onUploadLeads(nice);
        });
    };
  });

  return (
    <>
       <div className="mb-6 text-slate-400">
          <p>
            Feel free to add any custom information you need us to know.
            </p>
          &nbsp;
            <div>
      <HotTable
        ref={hotRef}
        data={hotData}
        startRows={8}
        startCols={6}
        colHeaders={["LinkedIn Lead", "Comments, Nicknames"]}
        cell={[
            {
              row: 0,
              col: 0,
              renderer: "customStylesRenderer",
            },
          ]}
        height="auto"
        width="auto"
        licenseKey="non-commercial-and-evaluation"

        afterChange={function(change:any, source:any) {
          if (source === "loadData") {
            return; //don't save this change
          }

          if (!isAutosave) {
            return;
          }

          fetch("https://handsontable.com/docs/scripts/json/save.json", {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: change })
          })
            .then(response => {
                if (change != null) {
                    setOutput(`Autosaved (${change!.length} cell${change!.length > 1 ? "s" : ""})`);
                    console.log(`Autosaved (${change!.length} cell${change!.length > 1 ? "s" : ""})`);
                    console.log(JSON.stringify({ data: change}));
                    
                  }
            });
        }}
      />
        &nbsp;
         <p className="mb-6 text-slate-400 text-sm">
            We will use the website of each prospect&apos;s current company as the background for their personalised video. We will retrieve this info from their LinkedIn profile. If otherwise required, please let us know.
            </p>
          
  </div>
  </div>
  &nbsp;
          <button
            className="bg-black disabled:opacity-50 w-full p-2 rounded-md text-lg"
            onClick={(...args) => saveClickCallback(...args)}
            disabled={props.isLoading}
          >
            Next
          </button>

      <output className="console" id="output">{output}</output>
    </>
    
  );
};
export default ExampleComponent;