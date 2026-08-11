---
layout: page
published: true
title: Parallel HDF5 Output for CFD Simulations
description: A C++/MPI extension to NS-EOF that added structured HDF5 output and XDMF metadata for faster, smaller, ParaView-ready simulation data.
img: assets/img/projects/hpc/hdf5-data-layout.png
importance: 7
category: professional
permalink: /projects/parallel-hdf5-cfd-output/
---

In the **Turbulent Flow Simulation on HPC-Systems** course at the **Technical University of Munich (TUM)**, I worked on NS-EOF, a distributed-memory C++ framework for incompressible Navier-Stokes simulations. The work combined individual solver and profiling tasks with a team final project focused on redesigning the simulation output pipeline.

The final system added parallel HDF5 output through the HDF5 C API and generated XDMF metadata for ParaView. It preserved VTK output as a runtime option while providing a more scalable binary path for larger 2D, 3D, and parallel simulations.

<div class="row my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Approximately 50% faster</h3>
      <p class="mb-0">I/O performance improvement reported across the evaluated simulation scenarios.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">Approximately 50% smaller</h3>
      <p class="mb-0">Binary HDF5 output reduced storage requirements compared with the previous output path.</p>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded h-100 p-3">
      <h3 class="h5">2D, 3D, and parallel</h3>
      <p class="mb-0">Benchmarks covered cavity and channel simulations across multiple domain sizes.</p>
    </div>
  </div>
</div>

## The engineering problem

Scientific simulations produce large numerical fields for every timestep, including mesh points, pressure, and velocity. The existing VTK and ASCII-oriented output became fragmented across files and processes, increasing storage overhead and making post-processing less efficient as problem sizes grew.

The project therefore had three practical objectives:

- reduce simulation I/O time,
- reduce the number and size of generated files,
- provide a structure that ParaView could load efficiently for post-processing.

This was not only a file-format conversion. The data model had to represent timesteps, MPI ranks, and numerical fields consistently while remaining compatible with parallel execution.

## Designing the HDF5 hierarchy

We evaluated different ways to organize the simulation data. One layout separated timestep files and grouped values by MPI rank. The more consolidated design placed timesteps and rank-specific data inside a unified HDF5 structure, reducing file fragmentation and simplifying downstream access.

<div class="row justify-content-center">
  <div class="col-md-12 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/hpc/hdf5-data-layout.png" title="HDF5 layout alternatives for MPI simulation output" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Data-layout alternatives from the final project presentation. The hierarchy organizes timesteps, MPI ranks, and simulation fields such as points, pressure, and velocity within HDF5 groups and datasets.
</div>

## Implementation

The team integrated the new output path into the existing simulation system rather than building a separate converter.

### Build and configuration integration

- Added HDF5 dependency handling to the existing CMake build.
- Extended the XML configuration so users could select VTK or HDF5 output at runtime.
- Kept the output choice separate from the numerical simulation configuration.

### Parallel data writing

- Used the HDF5 C API to create files, groups, datasets, attributes, and numerical writes.
- Structured mesh points, pressure, velocity, timesteps, and process-specific data in a predictable hierarchy.
- Enabled multiple MPI processes to participate in the output workflow.
- Produced a unified binary representation suitable for larger distributed simulations.

### ParaView interoperability

HDF5 stores the numerical arrays, while XDMF describes their structure and meaning. Generating XDMF metadata allowed ParaView to interpret the HDF5 datasets without duplicating the numerical data in another file format.

We validated the new output against the existing VTK results to confirm that the binary pipeline preserved the expected simulation fields.

## Benchmarking the output pipeline

The evaluation compared VTK/ASCII and HDF5 output for Cavity and Channel simulations. Tests covered multiple 2D and 3D domain sizes as well as parallel 3D runs.

<div class="row">
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/hpc/runtime-reduction-parallel.png" title="Runtime reduction for parallel 3D simulations" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/projects/hpc/file-size-reduction.png" title="File-size reduction across simulation cases" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Benchmark results from the final presentation. The exact improvement varies with the simulation and domain size, while the overall evaluation showed substantial I/O and storage reductions.
</div>

The most important result was not a single benchmark point. The HDF5 path remained useful across several simulation types and problem sizes, showing that the output design was not tied to one narrowly selected case.

## Debugging parallel I/O

Parallel HDF5 failures did not always provide clear error messages. Problems could originate in MPI coordination, HDF5 calls, group and dataset structure, or mismatched assumptions about the generated file.

We used `h5dump` to inspect the hierarchy and values directly, compared outputs with the VTK baseline, and iterated on the file structure. This made file-layout design and observability part of the engineering task rather than treating output as a final serialization step.

## Outcome

The project delivered a configurable, ParaView-compatible HDF5 output pipeline for NS-EOF. It improved post-processing performance, reduced file size and fragmentation, and made the output architecture more suitable for HPC workloads. The resulting HDF5 pipeline is now used by a mechanical engineering chair at TUM.

## Technical stack

`C++` · `MPI` · `PETSc` · `HDF5 C API` · `XDMF` · `CMake` · `XML configuration` · `ParaView` · `h5dump` · `CFD` · `Performance profiling`

## Project context

I completed this course work at the **TUM Chair of Scientific Computing**. My contribution included individual solver-side improvements and profiling, followed by the team-based HDF5 integration and benchmarking project described here.
