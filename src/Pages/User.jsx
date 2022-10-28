import { useState } from "react";
import { ErrorBoundary } from "../Components/ErrorBoundary";
import { Pagination } from "../Components/Pagination";
import { Button } from "../Components/Button";
import UsersDetails from "../Components/UsersDetails";
import { API } from "../Components/API";
import { useCustom } from "../Components/CustomsHook";

export const UsersPage = () => {
  const { data, loading, error } = useCustom(API, "Error getting users");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const indexOfLastUser = currentPage * usersPerPage; 
  const indexOfFirstUser = indexOfLastUser - usersPerPage; 
  const currentUser = data.slice(indexOfFirstUser, indexOfLastUser); 

  const paginated = (data) => {
    setCurrentPage(data);
  };
  const nextPage = () => {
    return setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div>
      {error && <ErrorBoundary err={error} />}
      {!error && (
        <div
          style={{
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UsersDetails data={currentUser} isLoading={loading} />
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              width: "100%",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            {!loading && (
              <div style={{ display: "flex", gap: "1rem" }}>
                {" "}
                <Button onClick={() => nextPage()}>Prev</Button>
                <Pagination
                  usersPerPage={usersPerPage}
                  pageNumber={paginated}
                  paginated={paginated}
                  data={currentUser}
                  totalUsers={data.length}
                />
                <Button onClick={() => prevPage()}>Next</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

