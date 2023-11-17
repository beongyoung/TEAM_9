import { useMemo, Suspense } from "react";
import { ListGrid } from "./styles.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function HubListViewer({ resource, mapper }) {
  let rawData = resource();
  if (rawData?.result !== undefined) rawData = rawData.result; //pending backend
  return <ListGrid>{rawData.map(mapper)}</ListGrid>;
}

export default function HubList({ api, mapper }) {
  const resource = useMemo(() => fetchAxios(api), [api]);
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading</div>}>
        <HubListViewer resource={resource} mapper={mapper} />
      </Suspense>
    </ErrorBoundary>
  );
}
