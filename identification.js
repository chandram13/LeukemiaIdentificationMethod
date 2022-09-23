
// Marvish Chandra

class LeukemiaIdentifcation{

    function heteroIdentifiers{
        heteroPhenotype = "CD34+/CD38-"

        commonstemcellFeatures = ["Drug resistance","Self renewal","Undifferentiated, as in uniqueness"]
        document.getElementById("demo").innerHTML = "The following is a distinguished table comparing LSC (Leukemia Stem Cell) from HSC (Hematopoietic Stem Cell) markers"

        LSC1 = {Marker:"IL1RAP",Identification: "IL1R3", Expression: "T cells", InAML: 79}
        LSC2 = {Marker:"CLL-1",Identification: "CLEC12A,MICL,DCAL-2", Expression: "Myeloid cells", InAML: 70}
        LSC3 = {Marker:"TIM-3",Identification: "T-cell lg Mucin 3", Expression: "Activated T cells, NK cells", InAML: 91}
        LSC4 = {Marker:"CD2",Identification: "SRBC, LFA2, T11", Expression: "T cells, NK Cells", InAML: 87}
        LSC5 = {Marker:"CD7",Identification: "GP40,TPF1,LEU-9", Expression: "T cells", InAML: 43}
        LSC6 = {Marker:"CD11b",Identification: "Integrin alpha M, Mac-1", Expression: "Myeloid cells", InAML: 55}
        LSC7 = {Marker:"CD22",Identification: "BL-CAM, Siglec-2", Expression: "B cells", InAML: 51}
        LSC8 = {Marker:"CD25",Identification: "IL2RA, TAC", Expression: "Activated B and T cells", InAML: 25}
        LSC9 = {Marker:"CD33",Identification: "P67, Siglec-3", Expression: "Myeloid cells, NK cells", InAML: 82}
        LSC10 = {Marker:"CD44",Identification: "Adhesion molecule", Expression: "Ubiquitously", InAML: 100}
        LSC11 = {Marker:"CD45RA",Identification: "Tyrosine phosphatase receptor type C", Expression: "T cells, myeloid cells", InAML: 65}
        LSC12 = {Marker:"CD47",Identification: "Integrin-associated protein (IAP)", Expression: "Ubiquitously", InAML: 100}
        LSC13 = {Marker:"CD56",Identification: "N-CAM, MSK39", Expression: "NK cells, activated T cells", InAML: 32}
        LSC14 = {Marker:"CD96",Identification: "TACTILE", Expression: "Activated T cells", InAML: 33}
        LSC15 = {Marker:"CD99",Identification: "MIC2, single-chain type-1 glycoprotein", Expression: "Myeloid cells", InAML: 83}
        LSC16 = {Marker:"CD123",Identification: "IL3R", Expression: "Myeloid cells", InAML: 82}
        populationFrequency = [1,5000]
        antigens&HTC = {StainingTarget: "CD34", "CD38", "CD33", "CD90", "CD117", "CD123", "CLL-1", "Hoechst 33342", "ALDH"}

        document.getElementById("demo").innerHTML = "The sixteen LSC markers have the chance to survive Leukemia with proper therapy."

    }
}
