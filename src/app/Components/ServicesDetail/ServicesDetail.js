import Image from "next/image";
export default function ServiceDetail() {
  return (
    <div>
      <div className="rounded-lg text-white border w-full border-[#0057d3]">
        <p className="text-xl ms-2 my-4">Top Earning Services</p>
        <div className="relative overflow-x-auto">
          <table className="w-full bg-transparent text-start shadow-sm overflow-hidden">
            <thead className="uppercase border-b border-[#0057d3] text-sm">
              <tr>
                <th className="text-start py-3">
                  <span className="ms-3">#</span>
                </th>
                <th className="text-start py-3">Name</th>
                <th className="text-start py-3">Popularity</th>
                <th className="text-start py-3">Sales</th>
              </tr>
            </thead>
            <tbody className="text-white text-start">
              <tr className="border-b border-[#0057d3]">
                <td className="py-3">
                  <p className="ms-3">01</p>
                </td>
                <td className="py-3">Logo Design</td>
                <td className="text-center py-3">
                  <div className="h-[4px] rounded-full bg-[#0057d3] w-[60%]"></div>
                </td>
                <td className="py-3">
                  <div className="bg-[#0057d3] py-2 w-[50px] text-white text-center rounded-lg">
                    60%
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#0057d3]">
                <td className="py-3">
                  <p className="ms-3">02</p>
                </td>
                <td className="py-3">Branding</td>
                <td className="text-center py-3">
                  <div className="h-[4px] rounded-full bg-[#0057d3] w-[50%]"></div>
                </td>
                <td className="py-3">
                  <div className="bg-[#0057d3] py-2 w-[50px] text-white text-center rounded-lg">
                    50%
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="py-3">
                  <p className="ms-3">03</p>
                </td>
                <td className="py-3">Print Design</td>
                <td className="text-center py-3">
                  <div className="h-[4px] rounded-full bg-[#0057d3] w-[30%]"></div>
                </td>
                <td className="py-3">
                  <div className="bg-[#0057d3] py-2 w-[50px] text-white text-center rounded-lg">
                    30%
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
