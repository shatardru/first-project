import Navbar from "../navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <p>Left Nav</p>
                </div>
                <div className="col-md-10">
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
